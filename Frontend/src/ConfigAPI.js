import axios from "axios"

const sendMeetingText = async(inputText) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/meeting`,{
            meetingText: inputText
        })
        return response.data
    } catch (error) {
        console.log('Error in sendMeetingText: ', error)
    }
}

export default sendMeetingText