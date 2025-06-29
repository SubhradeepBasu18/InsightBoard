import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function SignupPage() {
    const ref = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Left Section - New Banner */}
            <div
                ref={ref}
                className="relative hidden md:flex w-1/2 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-700 
                    text-white flex-col justify-center px-16 overflow-hidden"
            >
                {/* Animated Elements */}
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
                />

                {/* Banner Content */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl font-bold mb-4 leading-tight z-10"
                >
                    Ready to unlock smarter collaboration?
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-6 z-10"
                >
                    InsightBoard helps teams move faster by transforming meeting chaos into structured insights and action plans. Get started for free and scale as you grow.
                </motion.p>

                {/* Avatar Group */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center space-x-2 z-10"
                >
                    <motion.div
                        className="absolute w-10 h-10 bg-purple-400 rounded-full opacity-30 blur-2xl"
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
                        Join <strong>12k+</strong> teams using InsightBoard
                    </span>
                </motion.div>
            </div>

            {/* Right Section - Sign Up Form */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 bg-gray-900 text-white flex justify-center items-center px-10"
            >
                <div className="max-w-md w-full flex flex-col justify-center items-center">
                    <span className="p-5 mb-5">
                        <CgProfile size={80}/>
                    </span>
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-6"
                >
                    Create your account
                </motion.h2>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-full space-y-4"
                >
                    <div>
                        <label className="block mb-1 text-sm">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg shadow-blue-500/30 
                        transition duration-300 ease-in-out"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg shadow-blue-500/30 
                        transition duration-300 ease-in-out"
                        />
                    </div>

                    <div className="relative">
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 pr-10 bg-gray-800 border border-gray-600 rounded 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg shadow-blue-500/30 
                        transition duration-300 ease-in-out"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-2 top-8 text-lg text-gray-400 hover:text-white"
                        >
                            {showPassword ? <BiSolidShow size={20} /> : <BiSolidHide size={20} />}
                        </button>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded"
                    >
                        Sign up
                    </motion.button>
                </motion.form>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 text-sm text-gray-400"
                >
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        LogIn
                    </Link>
                </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
