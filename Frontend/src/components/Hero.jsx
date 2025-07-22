"use client"
import { motion } from "framer-motion"
import { ClipboardList, CheckCircle, ArrowRight, Sparkles, Zap, Users } from "lucide-react"

export default function Hero() {
    return (
        <div className="relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-zinc-950 from-zinc-900/30 via-transparent to-zinc-950" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [-10, -30, -10],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="relative px-4 py-12 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-7xl rounded-3xl shadow-2xl overflow-hidden min-h-[600px] bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-zinc-800/90 backdrop-blur-xl border border-zinc-700/50"
                >
                    <div className="h-full flex flex-col lg:flex-row">
                        {/* Left side - Content */}
                        <div className="relative p-8 sm:p-12 lg:p-16 lg:w-1/2 bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-zinc-800/95">
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                            <div className="relative z-10">
                                {/* Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="mb-8 inline-flex items-center rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-4 py-2 text-sm font-medium text-blue-200 backdrop-blur-sm"
                                >
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    >
                                        <Sparkles className="mr-2 h-4 w-4" />
                                    </motion.div>
                                    AI-Powered Meeting Assistant
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                        className="ml-2 w-2 h-2 bg-green-400 rounded-full"
                                    />
                                </motion.div>

                                {/* Main Heading */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                                >
                                    <span className="block text-white mb-2">Transform Rough Notes</span>
                                    <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                                        Into Actionable Tasks
                                    </span>
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="mb-8 text-lg leading-relaxed text-zinc-300"
                                >
                                    Automatically converts meeting discussions into structured summaries and clear to-do lists with
                                    assigned owners and deadlines.
                                </motion.p>

                                {/* Features */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="mb-10 space-y-4"
                                >
                                    {[
                                        {
                                            title: "Intelligent Summaries",
                                            description: "Condenses hours of discussion into key minutes",
                                            icon: Zap,
                                        },
                                        {
                                            title: "Task Extraction",
                                            description: "Identifies action items with owners and deadlines",
                                            icon: Users,
                                        },
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start group"
                                        >
                                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <feature.icon className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-base font-semibold text-white group-hover:text-blue-100 transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* CTA Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 px-8 py-4 text-base font-semibold text-white transition-all duration-300 border border-blue-500/20 hover:border-blue-400/30 shadow-xl"
                                >
                                    <span className="relative z-10">Try Free Today</span>
                                    <motion.div
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Right side - Enhanced Mockup */}
                        <div className="relative p-8 sm:p-12 flex items-center justify-center lg:w-1/2 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm">
                            {/* Background decorative elements */}
                            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                whileHover={{ scale: 1.02, rotateY: -2 }}
                                className="relative w-full max-w-md"
                            >
                                {/* Enhanced mockup container */}
                                <div className="bg-zinc-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-700/50 overflow-hidden">
                                    {/* Window controls */}
                                    <div className="bg-zinc-800/80 px-4 py-3 border-b border-zinc-700/50 flex items-center gap-2">
                                        <div className="flex space-x-2">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                                                className="h-3 w-3 rounded-full bg-red-400"
                                            />
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                                                className="h-3 w-3 rounded-full bg-yellow-400"
                                            />
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                                                className="h-3 w-3 rounded-full bg-green-400"
                                            />
                                        </div>
                                        <div className="flex-1 text-center">
                                            <div className="text-xs text-zinc-400 font-medium">InsightBoard Dashboard</div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meeting Summary Section */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.8 }}
                                            className="mb-6"
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                                <h3 className="text-sm font-semibold text-blue-300">Meeting Summary</h3>
                                            </div>
                                            <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/30">
                                                <p className="text-sm text-zinc-300 leading-relaxed">
                                                    Discussed Q3 marketing strategy. Agreed to focus on digital channels. Need to finalize budget
                                                    by Friday. UX team to present new mockups.
                                                </p>
                                            </div>
                                        </motion.div>

                                        {/* Action Items Section */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 1 }}
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                <h3 className="text-sm font-semibold text-green-300">Action Items</h3>
                                            </div>
                                            <div className="space-y-3">
                                                {[
                                                    { task: "Prepare digital marketing plan", assignee: "@KirstenStewart", due: "Due 15th June" },
                                                    { task: "Finalize budget", assignee: "@SadieSink", due: "Due Friday" },
                                                    { task: "Present UX mockups", assignee: "@Design Team", due: "Next meeting" },
                                                ].map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                                                        whileHover={{ x: 2 }}
                                                        className="flex items-start gap-3 p-3 bg-zinc-800/30 rounded-lg border border-zinc-700/20 hover:border-blue-500/30 transition-all duration-300 group"
                                                    >
                                                        <motion.div
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                                                            className="w-2 h-2 mt-2 rounded-full bg-blue-400"
                                                        />
                                                        <div className="flex-1">
                                                            <span className="text-sm text-white group-hover:text-blue-100 transition-colors">
                                                                {item.task}
                                                            </span>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <span className="text-xs text-blue-300">{item.assignee}</span>
                                                                <span className="text-xs text-zinc-400">•</span>
                                                                <span className="text-xs text-zinc-400">{item.due}</span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Floating elements around mockup */}
                                <motion.div
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full border border-blue-400/30 flex items-center justify-center"
                                >
                                    <CheckCircle className="w-4 h-4 text-blue-400" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [5, -5, 5] }}
                                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-500/20 rounded-full border border-green-400/30 flex items-center justify-center"
                                >
                                    <ClipboardList className="w-4 h-4 text-green-400" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
