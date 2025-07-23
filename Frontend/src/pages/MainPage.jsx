import React, { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footers'
import sendMeetingText from '../ConfigAPI.js'

const GoPaste = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h2v3h10V5h2v14z"/>
  </svg>
)

const MdOutlineFileUpload = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
  </svg>
)

const MdOutlineAutoAwesome = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
)

function MainPage({isLoggedIn}) {
    const navigate = useNavigate()
    const [inputText, setInputText] = useState('')
    const [isProcessing, setIsProcessing] = useState(false)
    const [dragOver, setDragOver] = useState(false)
    const [uploadedFile, setUploadedFile] = useState(null)
    const textareaRef = useRef(null)
    const containerRef = useRef(null)
    const fileInputRef = useRef(null)
    const isInView = useInView(containerRef, { once: true })

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = async () => {
        if (!isLoggedIn) {
            navigate('/login')
            return
        }
        
        if (!inputText.trim()) return
        
        setIsProcessing(true)
        console.log(inputText);   
        try {
            const response = await sendMeetingText(inputText)
            console.log(response);
            setInputText('')     
        } catch (error) {
            console.error('Error processing text:', error)
        } finally {
            setIsProcessing(false)
        }
    }

    const handlePaste = async () => {
        if (!isLoggedIn) {
            navigate('/login')
            return
        }
        
        try {
            const text = await navigator.clipboard.readText()
            setInputText(text)
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err)
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        setDragOver(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setDragOver(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setDragOver(false)
        const files = Array.from(e.dataTransfer.files)
        if (files.length > 0) {
            handleFileSelection(files[0])
        }
    }

    const handleFileSelection = (file) => {
        if (!file) return

        const allowedTypes = [
            'text/plain',
            'application/pdf',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/msword'
        ]

        if (!allowedTypes.includes(file.type)) {
            alert('Please upload a valid file (.txt, .pdf, .docx)')
            return
        }

        setUploadedFile({
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified
        })
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            handleFileSelection(file)
        }
        e.target.value = ''
    }

    const handleRemoveFile = () => {
        setUploadedFile(null)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex flex-col relative overflow-hidden'>
            <Header
                startShow={false}
                isLoggedIn={isLoggedIn}
            />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <motion.div 
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='flex flex-col items-center pt-16 mt-20 pb-20 relative z-10'
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <motion.h1 
                        className='text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'
                    >
                        Unlock Insights from Your
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                            Text Instantly
                        </span>
                    </motion.h1>
                    <motion.p 
                        className='text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed'
                    >
                        Paste your text or upload a file to automatically generate summaries, 
                        extract key topics, and identify actionable insights with the power of AI.
                    </motion.p>
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className='w-full max-w-4xl px-4'
                >
                    <motion.div 
                        className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
                            dragOver ? 'border-blue-500/50 shadow-blue-500/20' : ''
                        }`}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div className='p-6 pb-4'>
                            <div className='flex flex-row gap-4 mb-6 items-center justify-center'>
                                <motion.button 
                                    onClick={handlePaste}
                                    disabled={!isLoggedIn}
                                    whileHover={{ scale: isLoggedIn ? 1.05 : 1 }}
                                    whileTap={{ scale: isLoggedIn ? 0.95 : 1 }}
                                    className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium px-6 py-3 rounded-xl flex items-center transition-all duration-300 shadow-lg ${
                                        isLoggedIn 
                                            ? 'hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/25' 
                                            : 'opacity-50 cursor-not-allowed'
                                    }`}
                                >
                                    <span className='mr-2'><GoPaste /></span>
                                    {isLoggedIn ? 'Paste Text' : 'Login to Paste'}
                                </motion.button>
                                <motion.button 
                                    onClick={handleUploadClick}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium px-6 py-3 rounded-xl flex items-center transition-all duration-300 shadow-lg'
                                >
                                    <span className='mr-2'><MdOutlineFileUpload /></span>
                                    Upload Files
                                </motion.button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".txt,.pdf,.doc,.docx"
                                    onChange={handleFileInputChange}
                                    className="hidden"
                                />
                            </div>

                            {uploadedFile && (
                                <div className="mb-4 flex items-center justify-center">
                                    <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-2 flex items-center">
                                        <span className="text-blue-400 mr-2">{uploadedFile.name}</span>
                                        <button 
                                            onClick={handleRemoveFile}
                                            className="text-gray-400 hover:text-white transition-colors"
                                            aria-label="Remove file"
                                        >
                                            <CloseIcon />
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="relative">
                                <textarea
                                    ref={textareaRef}
                                    value={inputText}
                                    placeholder="Enter your text here, or drag and drop files..."
                                    className='w-full h-80 px-6 py-6 bg-gray-900/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl text-gray-200 placeholder-gray-500 resize-none
                                            focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-lg leading-relaxed'
                                    onChange={handleChange}
                                />
                                <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                                    {inputText.length} characters
                                </div>
                            </div>
                        </div>

                        <div className='px-6 pb-6'>
                            <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                                <div className="flex items-center gap-4">
                                    <p className='text-zinc-400 text-sm'>Supported formats:</p>
                                    <div className="flex gap-2">
                                        {['.txt', '.pdf', '.docx'].map((format) => (
                                            <span key={format} className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300">
                                                {format}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <motion.button 
                                    onClick={handleSubmit}
                                    disabled={!inputText.trim() || isProcessing || !isLoggedIn}
                                    whileHover={{ scale: (inputText.trim() && !isProcessing && isLoggedIn) ? 1.05 : 1 }}
                                    whileTap={{ scale: (inputText.trim() && !isProcessing && isLoggedIn) ? 0.95 : 1 }}
                                    className={`px-8 py-3 rounded-xl flex items-center font-semibold text-white shadow-lg transition-all duration-300 ${
                                        inputText.trim() && !isProcessing && isLoggedIn
                                            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 hover:shadow-purple-500/30 cursor-pointer'
                                            : 'bg-gray-600 cursor-not-allowed opacity-50'
                                    }`}
                                >
                                    {isProcessing ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                                            />
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            <span className='mr-2'>
                                                <MdOutlineAutoAwesome />
                                            </span>
                                            {isLoggedIn ? 'Generate Insights' : 'Login to Generate Insights'}
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <Footer />
        </div>
    )
}

export default MainPage