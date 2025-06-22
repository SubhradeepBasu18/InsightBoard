"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [onlineUsers, setOnlineUsers] = useState(1247)

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simulate real-time user count changes
  useEffect(() => {
    const userTimer = setInterval(() => {
      setOnlineUsers((prev) => prev + Math.floor(Math.random() * 3) - 1)
    }, 5000)

    return () => clearInterval(userTimer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/50">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-transparent to-zinc-800/10" />

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="size-6 text-blue-400">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white">InsightBoard</h3>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 mb-8"
        >
          {["Product", "Pricing", "Resources", "Contact Us"].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ color: "#ffffff", y: -2 }}
              className="text-zinc-400 hover:text-white transition-all duration-300 text-sm font-medium"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* Real-time Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl backdrop-blur-sm"
        >
          {/* Live Status */}
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <span className="text-green-400 text-sm font-medium">LIVE</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-zinc-700" />

          {/* Real-time Clock */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-zinc-300 text-sm font-mono">{formatTime(currentTime)}</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-zinc-700" />

          {/* Online Users */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-zinc-300 text-sm">
              <span className="font-semibold text-white">{onlineUsers.toLocaleString()}</span> users online
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-zinc-700" />

          {/* System Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-zinc-300 text-sm">All systems operational</span>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-6 border-t border-zinc-800/50"
        >
          <p className="text-zinc-500 text-sm"> &copy; {new Date().getFullYear()} InsightBoard. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
