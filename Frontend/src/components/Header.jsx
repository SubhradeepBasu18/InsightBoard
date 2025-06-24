import React from "react"
import { motion } from "framer-motion"
import { Bell, Settings, Menu, X } from "lucide-react"
import { Link } from 'react-router-dom'

export default function Header({startShow}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zinc-950/90 border-b border-zinc-800/50 shadow-2xl shadow-zinc-900/20">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-zinc-950/80 to-zinc-900/50 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-18">
                    {/* Logo Section */}
                    <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="flex items-center gap-3"
                    >
                        <motion.div
                            whileHover={{
                                rotate: 15,
                                scale: 1.1,
                                filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                            }}
                            className="relative"
                        >
                            <div className="size-8 sm:size-9 text-blue-400 relative z-10">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 size-8 sm:size-9 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>

                        <div className="flex flex-col">
                            <motion.h1
                                whileHover={{ scale: 1.02 }}
                                className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
                            >
                                InsightBoard
                            </motion.h1>
                            <div className="h-[1px] w-0 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500" />
                        </div>
                    </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {["Product", "Pricing", "Resources", "Company"].map((item, index) => (
                            <motion.a
                                key={item}
                                href="#"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{
                                    y: -2,
                                    color: "#ffffff",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="relative text-zinc-300 hover:text-white text-sm font-medium transition-all duration-300 group px-3 py-2 rounded-lg hover:bg-zinc-800/30"
                            >
                                {item}
                                <motion.span
                                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-3/4 rounded-full"
                                    whileHover={{ width: "75%" }}
                                />
                            </motion.a>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        {/* Notification Bell */}
                        <motion.div
                            whileHover={{
                                rotate: [0, -10, 10, -10, 0],
                                scale: 1.1,
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="relative group"
                        >
                            <div className="text-zinc-400 hover:text-white cursor-pointer p-2.5 rounded-xl hover:bg-zinc-800/50 transition-all duration-300 border border-transparent hover:border-zinc-700/50">
                                <Bell size={18} className="stroke-current" />
                                {/* Notification dot */}
                                <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            </div>
                        </motion.div>

                        {/* Settings */}
                        <motion.div
                            whileHover={{
                                rotate: 90,
                                scale: 1.1,
                            }}
                            whileTap={{ scale: 0.9 }}
                            className="text-zinc-400 hover:text-white cursor-pointer p-2.5 rounded-xl hover:bg-zinc-800/50 transition-all duration-300 border border-transparent hover:border-zinc-700/50"
                        >
                            <Settings size={18} className="stroke-current" />
                        </motion.div>

                        {/* Get Started Button */}
                        <Link to="/main">
                            {
                                startShow && (
                                    <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden sm:flex items-center justify-center h-10 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-400/30"
                            >
                                Get Started
                                <motion.span
                                    className="ml-2 text-blue-200"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{
                                        repeat: Number.POSITIVE_INFINITY,
                                        duration: 2,
                                        ease: "easeInOut",
                                    }}
                                >
                                    →
                                </motion.span>
                            </motion.button>
                                )
                            }
                        </Link>

                        {/* User Avatar */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                type: "spring",
                                stiffness: 200,
                            }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <div
                                className="bg-center bg-cover rounded-xl size-9 sm:size-10 border-2 border-zinc-700/50 hover:border-blue-400/50 cursor-pointer transition-all duration-300 shadow-lg"
                                style={{
                                    backgroundImage:
                                        "url('https://wallpapercat.com/w/full/b/b/7/1533673-3840x2160-desktop-4k-ana-de-armas-wallpaper-image.jpg')",
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                {/* Online status indicator */}
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-zinc-950 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800/50 transition-all duration-300"
                        >
                            <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                        opacity: isMenuOpen ? 1 : 0,
                        height: isMenuOpen ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden overflow-hidden border-t border-zinc-800/50 mt-2"
                >
                    <div className="py-4 space-y-2">
                        {["Product", "Pricing", "Resources", "Company"].map((item, index) => (
                            <motion.a
                                key={item}
                                href="#"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isMenuOpen ? 1 : 0,
                                    x: isMenuOpen ? 0 : -20,
                                }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-300"
                            >
                                {item}
                            </motion.a>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isMenuOpen ? 1 : 0,
                                x: isMenuOpen ? 0 : -20,
                            }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            className="w-full mt-4 flex items-center justify-center h-10 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold"
                        >
                            Get Started
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </header>
    )
}
