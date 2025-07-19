import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const ref = useRef(null)
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="flex min-h-screen">
            {/* Left Section - Login Form */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-1/2 md:w-1/2 bg-zinc-900 text-white flex justify-center items-center px-10"
            >
                <div className="max-w-md w-full flex flex-col justify-center items-center">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6"
                >
                    Welcome back
                </motion.h2>

                {/* Social Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex space-x-4 mb-4 w-full"
                >
                    <button className="flex items-center justify-center w-1/2 py-2 px-4 border border-gray-600 rounded bg-gray-800 hover:bg-gray-700">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
                        Sign in with Google
                    </button>
                    <button className="flex items-center justify-center w-1/2 py-2 px-4 border border-gray-600 rounded bg-gray-800 hover:bg-gray-700">
                        <img src="https://www.svgrepo.com/show/448239/microsoft.svg" alt="Microsoft" className="w-5 h-5 mr-2" />
                        Sign in with Microsoft
                    </button>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center w-full mb-4"
                >
                    <hr className="flex-grow border-gray-600" />
                    <span className="px-2 text-sm text-gray-400">or</span>
                    <hr className="flex-grow border-gray-600" />
                </motion.div>

                {/* Login Form */}
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full space-y-4"
                >
                    <div>
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className='relative'>
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-2 top-6 text-sm text-gray-400 hover:text-white p-2">
                            {!showPassword ? <BiSolidShow size={25} /> : <BiSolidHide size={25} />}
                        </button>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <label>
                            <input
                                type="checkbox"
                                className="mr-1 " />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer"
                    >
                        Sign in to your account
                    </motion.button>
                </motion.form>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 text-sm text-gray-400"
                >
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </motion.p>
                </div>
            </motion.div>

            {/* Right Section - Branding with animation */}
            <div ref={ref} className="brand relative hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white flex-col justify-center px-16 overflow-hidden">
                {/* Floating bubbles */}
                <motion.div
                    className="absolute top-10 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    drag
                    dragConstraints={ref}
                />
                <motion.div
                    className="absolute bottom-20 right-16 w-24 h-24 bg-white bg-opacity-10 rounded-full"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    drag
                    dragConstraints={ref}
                />

                {/* Content */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl font-bold mb-4 leading-tight z-10"
                >
                    Supercharge Your Team’s Productivity with InsightBoard
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6 z-10"
                >
                    InsightBoard turns your meetings into actionable outcomes. Our AI automatically summarizes discussions, highlights key insights, and extracts tasks—so your team can stay aligned and move faster.
                </motion.p>

                {/* Avatar Group */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center space-x-2 z-10"
                >
                    {/* Pulse background behind avatars */}
                    <motion.div
                        className="absolute w-10 h-10 bg-blue-400 rounded-full opacity-30 blur-2xl"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        style={{ top: "50%", left: "12%", transform: "translate(-50%, -50%)" }}
                    />
                    <div className="flex -space-x-2 overflow-hidden">
                        {[32, 44, 65, 55].map((id, index) => (
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                key={index}
                                className="inline-block h-8 w-8 rounded-full ring-2 ring-white relative"
                                src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${id}.jpg`}
                                alt="user"
                            />
                        ))}
                    </div>
                    <span className="text-sm">
                        Over <strong>12.3k</strong> productive teams powered by InsightBoard
                    </span>
                </motion.div>
            </div>
        </div>
    );
}
