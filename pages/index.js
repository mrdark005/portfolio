import { useState, useEffect } from "react"
import Header from "../components/Header"
import About from "../components/About"
import SkeletonAbout from "../components/SkeletonAbout"
import Technologies from "../components/Technologies"
import Projects from "../components/Projects"
import SkeletonProjects from "../components/SkeletonProjects"
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(r => r.json())
import Head from "next/head"

export default function Component() {
	const [user, setUser] = useState(undefined)
    const [projects,setProjects] = useState(undefined)
	
	const profile = {
		avatar:"https://yt3.googleusercontent.com/UsFQQceFJ256oqHPy-b3hBj9WKsyynDlfEYK4SUAUl1ExR6uE_kRL-8SYDQapwd64GnVBaot5w=s900-c-k-c0x00ffffff-no-rj",
		username: "! MrDark#9245",
		description:"Hello 👋, I am a live in Kazakhstan. I'm 20 years old now and I have some small projects. I spend most of my time learning software."
	}
	
	 const {data:repos,error:errorProjects} = useSWR(' https://api.github.com/users/mrdark005/repos ',fetcher,{refreshInterval:5000})
	 console.log(repos)
	useEffect(() => {
        if(repos) {
          setProjects(repos)
        }
    },[repos])
	
  return(
    <div>
	
      <Head>
        <title>MrDark.tk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	<link rel="icon" href={profile.avatar}/>
      </Head>
    <Header/>
	<div className="container mx-auto pr-6 pl-6  md:pr-24 md:pl-24 pt-6 pb-6 mt-6">
 	<About profile={profile}/>
	 <br/>
	 <Technologies/>
      {projects ? <Projects id="projects" projects={repos}/> : <SkeletonProjects/>}
	</div>
    </div>
  )

}
