import { useState, useEffect } from "react"
import Header from "../components/Header"
import About from "../components/About"
import SkeletonAbout from "../components/SkeletonAbout"
import Technologies from "../components/Technologies"
import SkeletonTechnologies from "../components/SkeletonTechnologies"
import Projects from "../components/Projects"
import SkeletonProjects from "../components/SkeletonProjects"
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(r => r.json())
import Head from "next/head"
import Footer from "../components/Footer"

export default function Component() {
  const [user, setUser] = useState(undefined)
  const [projects, setProjects] = useState(undefined)
  const [loading, setLoading] = useState(undefined)
  setTimeout(() => {
    setLoading(true)
  }, 1500)
  const profile = { 
    avatar: "https://yt3.googleusercontent.com/UsFQQceFJ256oqHPy-b3hBj9WKsyynDlfEYK4SUAUl1ExR6uE_kRL-8SYDQapwd64GnVBaot5w=s900-c-k-c0x00ffffff-no-rj",
    username: "Elnur Shabanov",
    description: "Hi, I’m Elnur! 👋 I’m a 20-year-old aspiring software developer based in Kazakhstan. Currently, I dedicate most of my time to mastering modern technologies and bringing my ideas to life through various projects. I am deeply committed to continuous learning and building impactful software."
  }

  const { data: repos, error: errorProjects } = useSWR(' https://api.github.com/users/mrdark005/repos ', fetcher, { refreshInterval: 5000 })
 
  useEffect(() => {
    if (repos) {
      setProjects(repos)
    }
  }, [repos])

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>{loading ? "Elnur.xyz" : "Loading..."}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={profile.avatar} />
      </Head>

      <div>
        <Header />
        <div className="container mx-auto px-6 md:px-24 pt-12 pb-12 mt-6">
        {loading ? <About profile={profile} /> : <SkeletonAbout />}
          <br className="hidden md:block" />
         {loading ? <Technologies /> : <SkeletonTechnologies />}
          <div className="mt-12">
            {projects ? <Projects id="projects" projects={repos} /> : <SkeletonProjects />}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
