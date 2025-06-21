import React from 'react'

function Header() {
    return (
        <header className="flex items-center justify-between border-b border-[#283039] px-12 py-5">
            <div className="flex items-center gap-4 text-white">
                <div className="size-4">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
                <h2 className="text-white text-lg font-bold tracking-[-0.015em]">InsightBoard</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                    {["Product", "Pricing", "Resources"].map((item) => (
                        <a key={item} className="text-white text-sm font-medium" href="#">
                            {item}
                        </a>
                    ))}
                </nav>
                <button className="flex items-center justify-center h-10 px-4 rounded-full bg-[#0a6bcb] text-white text-sm font-bold min-w-[84px]">
                    <span className="truncate">Get Started</span>
                </button>
                <div
                    className="bg-center bg-cover rounded-full size-10"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdvw1NtysxnfL6F03GF30JcsSUrsRo4LwTa46W7Lvgty35_FyZKlZL8UQgrOP1er9sV1MHRCX4Xk1HkSR-gQdofAYoM0eGn6cqncCrQQuii5YC9EyWkdX0aQDkYvzLSIGh3SW5xKk5wWHRdIg2dVIW9MICjLyh5DY9n43ouPaOSTOaVBkx-m_QRdS8CtVolJjgBKPtGraTJ7zemrOC890vpp3-b3-HnOsHcQxy5DWxCwKatCjFgrt6nt3TETcsxcVWfL5KHohzwmk')",
                    }}
                ></div>
            </div>
        </header>
    )
}

export default Header
