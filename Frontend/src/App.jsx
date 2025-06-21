import './App.css'
import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footers'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'

function App() {

    return (
        <div className="min-h-screen flex flex-col bg-[#111418] font-['Inter','Noto Sans',sans-serif]">
            <div className="layout-container flex flex-col grow h-full">
                {/* Hedaer section */}
                    <Header/>
                <main className="flex-1 px-40 py-5 flex justify-center">
                    <div className="layout-content-container max-w-[1400px] flex flex-1 flex-col">
                        {/* Hero features */}
                        <Hero/>
                        <Features/>
                        <Testimonials/>
                        <CTA/>
                    </div>
                </main>
                {/* footer */}
                <Footer/>
            </div>
        </div>      
    )
}

export default App
