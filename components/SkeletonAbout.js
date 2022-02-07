import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function SkeletonProfile() {
    return (
        <SkeletonTheme
          baseColor="#282f4c"
          highlightColor="#6063ff"
          data-aos="fade"
        >
            <div className="flex-auto sm:gap-4 sm:flex">
         <p className="text-center sm:text-left"><Skeleton width={200} height={200} className="sm:mr-8 mb-3"/></p>
         <span>
         <h1 className="text-center sm:text-left"><Skeleton width={250} height={30}></Skeleton></h1>
         <br/>
         <p className="text-center sm:text-left"><Skeleton width={500} height={60}></Skeleton></p>
         </span>
         </div>
        </SkeletonTheme>
    );
}

export default SkeletonProfile;