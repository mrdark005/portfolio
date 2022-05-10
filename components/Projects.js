import React from 'react'
import {AiFillStar} from "react-icons/ai"
 import { useRouter } from "next/router";

function SkeletonProjects({projects}) {
	const router = useRouter()
    return (
	<>
              <h1 className='text-4xl font-bold text-center mb-8'>Projects:</h1>
            <div id="repos" className='grid grid-cols sm:grid-cols-2 gap-8'>
            {
            projects.map((item, index) => (
                <div className='cursor-pointer bg-primary p-4 border-l-4 border-blue-500 mb-0 rounded-md' data-aos="fade" key={index}  onClick={() => router.push(item.html_url)}>
				    <div className="flex justify-between">
					<p> {item.name} </p>					
 <p 
             
            className="absolute z-50 right-4 transition-all flex gap-2 items-center top-4 hover:bg-purple-600 cursor-pointer border border-purple-600 rounded-lg px-2">
            <AiFillStar/> {item.stargazers_count}
            </p>					</div>
                    <br/>
                    <p> {item.description || "Description not found"}</p>
					
					<div className="flex justify-between mt-5">
					<p className="flex justify-between">
                <img src={item.owner.avatar_url} className="rounded-full max-w-8 max-h-8"></img>
                <p className="text-lg pl-2">{item.owner.login}</p>
					</p>		
					 
					<p className="text-smail">
					 {item.created_at}
					</p>
					</div>                </div>
            ))
			}
</div>
	</>
    );
}

export default SkeletonProjects
