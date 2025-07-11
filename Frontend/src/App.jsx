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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="min-h-screen flex flex-col bg-zinc-950 font-['Inter','Noto Sans',sans-serif]">
                        <div className="flex flex-col grow h-full w-full">
                            {/* Header section */}
                            <Header
                            startShow={true}
                            isLoggedIn={false}
                            />
                            <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 py-6 sm:py-8 md:py-10 flex justify-center">
                                <div className="w-full max-w-[1400px] flex flex-1 flex-col">
                                    {/* Hero features */}
                                    <Hero />
                                    <Features />
                                    <Testimonials />
                                    <CTA />
                                </div>
                            </main>
                            {/* Footer */}
                            <Footer />
                        </div>
                    </div>
                } />
                <Route path="/main" element={<MainPage isLoggedIn={false}/>} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App