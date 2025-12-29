import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SkeletonTechnologies() {
    return (
        <SkeletonTheme
            baseColor="#1e293b"
            highlightColor="#475569"
        >
            <section className="mt-20">
                <h1 className='text-center text-4xl font-bold mb-12'>
                    <Skeleton width={300} height={40} />
                </h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-secondary/30 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center rounded-xl p-6 h-full"
                        >
                            <div className="h-20 flex items-center justify-center w-full mb-4">
                                <Skeleton circle width={80} height={80} />
                            </div>
                            <Skeleton width={100} height={24} />
                        </div>
                    ))}
                </div>
            </section>
        </SkeletonTheme>
    );
}

export default SkeletonTechnologies;
