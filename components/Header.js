import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { BsGithub, BsInstagram } from "react-icons/bs"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Header = function () {
    const [menu, setMenu] = useState(false)
    const router = useRouter()
    function onMenuChange() {
        setMenu(!menu)
    }
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        if (router.pathname !== "/") return;

        const handleScroll = () => {
            const sections = [{ id: "repos", name: "projects" }];
            const scrollPosition = window.scrollY + 200;

            const currentSection = sections.find(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.name);
            } else {
                setActiveSection("home");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [router.pathname]);

    return (
        <nav className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-secondary/30 border-b border-white/10 shadow-xl">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <div className="flex space-x-7">
                        <div>
                            <a href="/" className="flex items-center py-4 px-2">
                                <span className="font-bold text-blue-400 text-xl tracking-wide">
                                    elnur.xyz
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="/"
                            className={`py-2 px-2 font-medium transition duration-300 relative group ${activeSection === "home" ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}`}>
                            Home
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${activeSection === "home" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </a>
                        <a
                            href="/#repos"
                            className={`py-2 px-2 font-medium transition duration-300 relative group ${activeSection === "projects" ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}`}>
                            Projects
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${activeSection === "projects" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </a>
                        <a
                            href="/docs"
                            className={`py-2 px-2 font-medium transition duration-300 relative group ${router.pathname.startsWith("/docs") ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}`}
                        >
                            Documentation
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${router.pathname.startsWith("/docs") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </a>


                        <a href="https://github.com/mrdark005" target="_blank" rel="noreferrer" className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                            <BsGithub />
                        </a>
                        <a href="https://instagram.com/eshabanov_" target="_blank" rel="noreferrer" className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                            <BsInstagram />
                        </a>

                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button text-gray-300 hover:text-white" onClick={onMenuChange}>
                            <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
                                <div className={`absolute transition-all duration-300 transform ${menu ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}>
                                    <GiHamburgerMenu size={24} />
                                </div>
                                <div className={`absolute transition-all duration-300 transform ${menu ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`}>
                                    <AiOutlineClose size={24} />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden backdrop-blur-xl bg-black/50 absolute w-full left-0 border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${menu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className={`px-2 pt-2 pb-5 space-y-2 sm:px-3 text-center transition-transform duration-300 ${menu ? "translate-y-0" : "-translate-y-4"}`}>
                    <a
                        href="/"
                        className={`block px-3 py-3 rounded-md text-base font-medium transition duration-300 ${activeSection === "home" ? "text-blue-400 bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/10"}`}
                    >
                        Home
                    </a>
                    <a
                        href="/#repos"
                        className={`block px-3 py-3 rounded-md text-base font-medium transition duration-300 ${activeSection === "projects" ? "text-blue-400 bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/10"}`}
                    >
                        Projects
                    </a>
                    <a
                        href="/docs"
                        className={`block px-3 py-3 rounded-md text-base font-medium transition duration-300 ${router.pathname.startsWith("/docs") ? "text-blue-400 bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/10"}`}
                    >
                        Documentation
                    </a>

                    <div className="flex justify-center space-x-6 pt-4 border-t border-white/10 mt-2">
                        <a href="https://github.com/mrdark005" target="_blank" rel="noreferrer" className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                            <BsGithub />
                        </a>
                        <a href="https://instagram.com/eshabanov_" target="_blank" rel="noreferrer" className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                            <BsInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
