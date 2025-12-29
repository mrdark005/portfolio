import React from 'react'
import { AiFillStar, AiOutlineLink } from "react-icons/ai"
import { useRouter } from "next/router";

function SkeletonProjects({ projects }) {
    const router = useRouter()
    return (
        <section className="mt-20" id="repos">
            <h1 className='text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    projects.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className='group relative cursor-pointer'
                            onClick={() => router.push(item.html_url)}
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                            <div className='relative bg-secondary/30 backdrop-blur-md border border-white/10 p-6 rounded-xl h-full flex flex-col hover:bg-white/5 transition-all duration-300 transform group-hover:-translate-y-1'>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors line-clamp-1">{item.name}</h3>
                                    <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                                        <AiFillStar className="text-yellow-400" />
                                        <span className="text-sm font-medium">{item.stargazers_count}</span>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                    {item.description || "No description provided."}
                                </p>

                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-2">
                                        <img src={item.owner.avatar_url} className="rounded-full w-6 h-6 border border-white/20" alt={item.owner.login} />
                                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{item.owner.login}</span>
                                    </div>
                                    <span className="text-xs text-gray-600">{new Date(item.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default SkeletonProjects
