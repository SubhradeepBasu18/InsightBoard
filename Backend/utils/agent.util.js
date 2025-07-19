import { createAgent, gemini } from "@inngest/agent-kit"

const generateSummary = async (meetingText) => {

    const supportAgent = createAgent({
        model: gemini({
            model: "gemini-1.5-flash-8b",
            apiKey: process.env.GEMINI_API_KEY,
        }),
        name: "AI meeting summarizer assistant",
        system: `
                You are a summarization assistant designed to read input content (text, documents, meeting notes, or transcripts) and generate concise, structured summaries in JSON format.

Follow these rules strictly:

1. Output **only** valid JSON. No explanation, headers, or markdown formatting.
2. Use the following JSON format:

{
    "title": "<A concise, relevant title for the content>",
    "summary": "<3-5 sentence high-level summary>",
    "key_points": [
        "<Key point 1>",
        "<Key point 2>",
        "...",
        "<Key point N>"
    ],
    "action_items": [
        "<Action item 1 (if any)>",
        "<Action item 2 (if any)>"
    ],
    "tags": [
        "<Relevant tag 1>",
        "<Relevant tag 2>"
    ]
}

3. Ensure the summary is **accurate**, not speculative.
4. "Action items" can be empty if there are none.
5. Keep tags short and relevant (e.g., "marketing", "deployment", "finance").

Never include anything outside the JSON block. Do not prefix with "Here is the summary" or similar.

If the input content is too short or doesn't have meaningful information, still return a valid JSON with "summary": "No significant content found."`  
    })

    const response =  await supportAgent.run(`
            You are a meeting summarization assistant. Only return a strict JSON object with no extra text, headers, or markdown.

Analyze the following meeting transcript or notes and respond with a JSON object containing:

- title: A concise title for the meeting.
- summary: A 3-5 sentence overview of the meeting discussion.
- key_points: A list of major discussion points or takeaways.
- decisions: A list of decisions to be taken based on the discussion
- action_items: A list of decisions made, tasks assigned, or next steps. Leave empty if none.
- tags: A list of relevant topics discussed in the meeting (e.g., ["product", "engineering", "roadmap"]).

Respond **ONLY** in this JSON format:

{
    "title": "Title of the meeting",
    "summary": "High-level summary of the meeting",
    "key_points": [
        "Discussion point 1",
        "Discussion point 2"
    ],
    "action_items": [
        "Action item 1",
        "Action item 2"
    ],
    "decisions": [
        "decision 1",
        "decision 2"
    ],
    "tags": [
        "tag1",
        "tag2"
    ]
}

Do not include any explanation or formatting outside the JSON object.

---
Meeting information: 

- Meeting input: ${meetingText}`);

        const raw = response.output[0].content;
        console.log("Raw response: ", raw);

        try {

            const match = raw.match(/```json\s*([\s\S]*?)\s*```/i);
            const jsonString = match ? match[1] : raw.trim();
            console.log("JSON STRING: ", jsonString);
        
        return JSON.parse(jsonString);
            
        } catch (error) {
            console.log("Failed to parse JSON from AI response: ", error.message);
            return null;            
        }  
};

export default generateSummary;