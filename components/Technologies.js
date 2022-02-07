import React from 'react'
import { useRouter } from "next/router";
import Data from '../data'
import Aos from 'aos'

function Technologies() {
	const router = useRouter()
    const tech = Data
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-8'>Technologies I Use:</h1>
            <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
            {
                tech.map((item,index) => {
                    return (
                        <div
                         key={index} 
                         data-aos="fade"
						             

                          className="border-l-4 border-blue-500 flex flex-col items-center justify-center  rounded-lg p-4 hover:scale-105 cursor-pointer transition-all">
                            <img src={item.icon} className="max-w-20 max-h-20"/>
                            <h1 className="text-2xl font-bold mt-4">{item.name}</h1>
                        </div>
                    )
                }
                )
            }
                            </div>
        </div>
    )
}

export default Technologies