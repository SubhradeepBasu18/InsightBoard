import './App.css'
import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footers'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Pricing from './pages/Pricing'

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-zinc-950 font-['Inter','Noto Sans',sans-serif]">
                <Header startShow={true} isLoggedIn={false} />
                <div className="flex flex-col grow h-full w-full pt-10"> 
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/main" element={<MainPage />} />
                        {/* Not required as Clerk is integrated */}
                        {/* <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} /> */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/pricing" element={<Pricing />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App