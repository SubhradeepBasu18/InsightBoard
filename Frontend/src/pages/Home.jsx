import React from 'react'
import CTA from '@/components/CTA'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'

const Home = () => {
    return (
            <main className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 py-6 sm:py-8 md:py-10 flex justify-center">
                <div className="w-full max-w-[1400px] flex flex-1 flex-col">
                    {/* Hero features */}
                    <Hero />
                    <Features />
                    <Testimonials />
                    <CTA />
                </div>
            </main>
    )
}

export default Home