import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SkeletonProfile() {
    return (
        <SkeletonTheme
            baseColor="#1e293b"
            highlightColor="#475569"
            data-aos="fade"
        >
            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-secondary/30 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
                <div className="relative">
                    <Skeleton circle width={160} height={160} className="border-4 border-white/10 shadow-lg" />
                </div>

                <div className="flex-1 w-full text-center sm:text-left">
                    <h1 className="mb-4">
                        <Skeleton width={200} height={40} />
                    </h1>

                    <p className="opacity-90 max-w-2xl">
                        <Skeleton count={3} />
                    </p>
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default SkeletonProfile;