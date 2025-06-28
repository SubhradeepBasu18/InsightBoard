import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footers';
import { GoPaste } from "react-icons/go";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { motion } from "motion/react"

function MainPage() {
    return (
        <div className='w-full min-h-screen bg-zinc-950 flex flex-col'>
            <Header
                startShow={false}
            />

            <motion.div initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 50 }} className='flex flex-col items-center pt-16 mt-20 pb-20'>
                <motion.h1 
                initial={{opacity: 0, x: -50}}
                transition={{delay: 0.2, duration: 0.6, type: "spring", stiffness: 30}}
                animate={{opacity: 1, x: 0}}
                className='text-white text-5xl font-semibold leading-tight '>Unlock Insights from Your Text Instantly</motion.h1>
                <motion.p 
                initial={{opacity: 0, x: -50}}
                transition={{delay: 0.1, duration: 0.6, type: "spring", stiffness: 30}}
                animate={{opacity: 1, x: 0}}
                className='text-zinc-400 mt-5 tracking-wide'>Paste your text or upload a file to automatically generate summaries, extract key topics, and identify actionable insights.</motion.p>

                <motion.div 
                initial={{opacity: 0, x: -50}}
                transition={{delay: 0.2, duration: 0.6, type: "spring", stiffness: 30}}
                animate={{opacity: 1, x: 0}}
                className='w-[50rem] h-[30rem] bg-[#1F2937] mt-14 rounded-3xl overflow-hidden px-6 py-4'>
                    <div className='flex flex-row gap-5 mb-5 items-center justify-center'>
                        <button className='bg-blue-600 hover:bg-gray-600 text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base cursor-pointer'>

                            <span className='mr-2'><GoPaste /></span>

                            Paste
                        </button>
                        <button className='bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base cursor-pointer'>

                            <span className='mr-2'><MdOutlineFileUpload /></span>

                            Upload Files

                        </button>
                    </div>
                    <textarea
                        type="text"
                        name="inputText"
                        id="inputText"
                        placeholder="Enter your text here..."
                        className='w-full h-[15rem] px-4 py-4 bg-gray-900 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-500
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow'
                    />

                    <div className='flex flex-row mt-2 items-center justify-between'>
                        <p className='text-zinc-400'>Supported formats: .txt, .pdf, .docx</p>

                        <motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log('hover started!')} className='bg-linear-to-r/oklch from-indigo-500 to-teal-400 px-3 py-2 m-2 rounded-xl flex flex-row'>
                            <span className='mr-2'>
                                <MdOutlineAutoAwesome />
                            </span>
                            Generate
                        </motion.button>

                    </div>


                </motion.div>
            </motion.div>
            <Footer />

        </div>
    )
}

export default MainPage
