import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SkeletonProjects() {
    return (
        <SkeletonTheme
          baseColor="#282f4c"
          highlightColor="#6063ff"
        >
            <h1 className='text-4xl font-bold text-center mb-8'>Projects:</h1>
            <div className='grid grid-cols sm:grid-cols-2 gap-8'>
            {
            [0,1,2,3,4].map((index) => (
                <div className='bg-primary p-4' data-aos="fade" key={index}>
				    <div className="flex justify-between">
					<p>
                    <Skeleton width={90} height={20}/>
					</p>					
					<p>
                    <Skeleton width={50} height={20}/>
					</p>
					</div>
                    <br/>
                    <p><Skeleton height={80}></Skeleton></p>
					<div className="flex justify-between">
					<p>
                    <Skeleton width={140} height={20}/>
					</p>					
					<p>
                    <Skeleton width={70} height={20}/>
					</p>
					</div>                </div>
            ))
			}
</div>
        </SkeletonTheme>
    );
}

export default SkeletonProjects