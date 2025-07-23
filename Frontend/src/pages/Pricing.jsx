import { faqs } from '@/constants'
import { PricingTable } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

const Pricing = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Pricing Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2 inline-block">
          Pricing Plans
        </span>
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Choose the perfect plan for your business needs
        </p>
      </div>

      {/* Pricing Table Container */}
      <div className="max-w-5xl mx-auto bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
        <div className="p-6 sm:p-8">
          <PricingTable 
            appearance={{
              baseTheme: dark,
              variables: {
                colorPrimary: '#3b82f6', // Blue-500
                colorBackground: '#000000', // Black
                colorText: '#ffffff', // White
                colorTextSecondary: '#93c5fd', // Blue-300
                colorShimmer: 'rgba(59, 130, 246, 0.1)', // Blue shimmer
                borderRadius: '0.5rem',
                colorInputBackground: '#111827' // Dark blue-gray
              },
              elements: {
                card: {
                  boxShadow: 'none',
                  backgroundColor: '#111827', // Dark blue-gray
                  border: '1px solid #1e3a8a' // Blue-900
                },
                badge: {
                  backgroundColor: '#1d4ed8', // Blue-700
                  color: '#ffffff'
                },
                pricingTable: {
                  backgroundColor: '#000000' // Black
                },
                button: {
                  backgroundColor: '#2563eb', // Blue-600
                  color: '#ffffff',
                  ':hover': {
                    backgroundColor: '#1d4ed8' // Blue-700
                  }
                },
                header: {
                  color: '#ffffff'
                },
                footer: {
                  backgroundColor: '#000000'
                }
              }
            }}
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            <span className="border-b-2 border-blue-500 pb-1">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to know about our pricing
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className="bg-zinc-900 hover:bg-zinc-800 p-6 rounded-lg border border-gray-800 transition-colors duration-200"
            >
              <h3 className="font-semibold text-white text-lg flex items-center">
                <svg 
                  className="w-5 h-5 text-blue-400 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                {item.question}
              </h3>
              <p className="mt-3 text-gray-300 pl-7">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing