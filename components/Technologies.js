import React from 'react'
import { useRouter } from "next/router";
import Data from '../data'
import Aos from 'aos'

function Technologies() {
    const router = useRouter()
    const tech = Data
    return (
        <section className="mt-20">
            <h1 className='text-center text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'>Technologies I Use</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {
                    tech.map((item, index) => {
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative bg-secondary/30 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center rounded-xl p-6 hover:bg-white/5 transition-all duration-300 h-full">
                                    <div className="h-20 flex items-center justify-center w-full mb-4">
                                        <img src={item.icon} className="max-w-[80px] max-h-[80px] drop-shadow-lg group-hover:scale-110 transition-transform duration-300" alt={item.name} />
                                    </div>
                                    <h1 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{item.name}</h1>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </section>
    )
}

export default Technologies