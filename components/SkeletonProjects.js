import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SkeletonProjects() {
    return (
        <SkeletonTheme
            baseColor="#1e293b"
            highlightColor="#475569"
        >
            <section id="repos">
                <h1 className='text-4xl font-bold text-center mb-12'>
                    <Skeleton width={300} height={40} />
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        [0, 1, 2, 3, 4, 5].map((index) => (
                            <div key={index} className='bg-secondary/30 backdrop-blur-md border border-white/10 p-6 rounded-xl h-48 flex flex-col justify-between' data-aos="fade-up">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <Skeleton width={120} height={24} />
                                        <Skeleton width={50} height={20} borderRadius={20} />
                                    </div>
                                    <p>
                                        <Skeleton count={2} />
                                    </p>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-2">
                                        <Skeleton circle width={24} height={24} />
                                        <Skeleton width={60} height={16} />
                                    </div>
                                    <Skeleton width={80} height={16} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </SkeletonTheme>
    );
}

export default SkeletonProjects