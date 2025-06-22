"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { testimonials } from "../constants/index"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const scrollRef = useRef(null)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Scroll to specific testimonial
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 320 + 24 // card width + gap
      scrollRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative overflow-hidden py-20 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-zinc-950 from-zinc-900/20 via-transparent to-zinc-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, -25, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-zinc-300 text-sm font-medium">Customer Stories</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-200 bg-clip-text text-transparent">
              What Our Users
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            Discover how InsightBoard is transforming teams and boosting productivity across organizations worldwide
          </motion.p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-blue-500/30 text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-blue-500/30 text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Auto-play toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              isAutoPlaying
                ? "bg-blue-500/20 border border-blue-500/30 text-blue-300"
                : "bg-zinc-800/50 border border-zinc-700/50 text-zinc-400"
            }`}
          >
            {isAutoPlaying ? "Auto-playing" : "Paused"}
          </motion.button>
        </div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory scrollbar-hide"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-80 snap-start group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="mb-6">
                      <Quote className="w-10 h-10 text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300" />
                    </motion.div>

                    {/* Testimonial Text */}
                    <blockquote className="text-zinc-100 text-lg leading-relaxed mb-8 font-medium group-hover:text-white transition-colors duration-300">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-14 h-14 rounded-2xl bg-cover bg-center ring-2 ring-zinc-600/30 group-hover:ring-blue-500/30 transition-all duration-300 shadow-lg"
                          style={{ backgroundImage: `url('${testimonial.image}')` }}
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-zinc-900 rounded-full animate-pulse" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-base group-hover:text-blue-100 transition-colors">
                          {testimonial.name.split(",")[0]}
                        </p>
                        <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
                          {testimonial.name.split(",")[1]?.trim()}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-1 h-1 bg-blue-400 rounded-full" />
                          <span className="text-xs text-blue-400">Verified User</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCurrentIndex(idx)
                setIsAutoPlaying(false)
              }}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 h-3 bg-blue-500" : "w-3 h-3 bg-zinc-700 hover:bg-zinc-600"
              }`}
            >
              {idx === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-sm text-zinc-400">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-zinc-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm text-zinc-400">Happy Users</div>
            </div>
            <div className="w-px h-8 bg-zinc-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99%</div>
              <div className="text-sm text-zinc-400">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

// Testimonials data
// const testimonials = [
//   {
//     name: "Sophia Patel, Project Manager",
//     quote:
//       "InsightBoard has revolutionized our team's workflow. We now spend less time on meeting recaps and more on strategic initiatives.",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBIJ1ZIoLL5qiDLOGX9zYFeUDS4VExL_Gzt-0b2oJdcGj9vmG_WpnnZCklYyWHlNiyO3BVdrT1ueqF0fGX50nGtrzKaPqmCWTLaUipK4f-yxo-eHGU775_BAoP2HpARaO0RHRW1YyLZrmpG58mfH7n__j_hq1Z9FDbu453Imw8O9ll89YF8_Sqo7xhUN11nbJ3_1Zg-MH_1uavywj_gQX1XlaJkSrGsLsCIeTJZII2cfpEDcjAjJKa0QGCt3v2hUNrWLtasJu1935o",
//   },
//   {
//     name: "Ethan Chen, Team Lead",
//     quote:
//       "The automated summaries are incredibly accurate and save us hours each week. It's a game-changer for our productivity.",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAOwfay6xyyYVZM1jWMwfcNj7AnkFwwb4FA1tq0Xg9Yi_rMRYHDdgkd96LKeLgkg6ZLpvZe0ISXyWerfKFjcYIVTjPhhCHnIEho06UjftqwvPHbWuaLodVVxDKCrkqf9EwBYUAfHg4vTVoqZOfSR4ZpTJZndDYh9Mv_ScLg6Pig4dAQ-0gzcNWiYN725VsK3U_489EJIFSKj2qVAsN4WHfWAgfUurBiE197spNa7rw4YH38YDxrpA_OfMcuYVCxmC_VZ1j11vRDB0U",
//   },
//   {
//     name: "Olivia Wong, Marketing Director",
//     quote:
//       "Sharing meeting insights has never been easier. InsightBoard keeps everyone on the same page and ensures no detail is missed.",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBwbDk6XXaGLXh5wAs_IUjZP_n1GHVlq40pn6eI_ErJ8axeglq8dd5Fl_jqyxFraJFys25NVWzxmckIP7uKWNfxmTg0Un8f5K2A6n5GRf05hOfNKLm1MCjAz_aSu3ELOpkjGzuNaA1AXkVIIcsAJAumpv7quYTETcsxcVWfL5KHohzwmk",
//   },
// ]
