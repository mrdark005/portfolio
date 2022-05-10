import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { useState} from "react"

const Header = function() {
    const [menu, setMenu] = useState(false)

    function onMenuChange(){
        setMenu(!menu)
    }
    return (
    <nav className="bg-primary shadow-lg border-t-4 border-blue-500 ">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        <a href="#" className="flex items-center py-4 px-2">
                            <img src="https://cdn.discordapp.com/avatars/699203703164633120/2f34ca5ca47fc1e257cc77e7ef97f02d.png" alt="Logo" className="rounded-full h-8 w-8 mr-2" />
                            <span className="font-semibold text-gray-500 text-lg">
                             MrDark
                            </span>
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                    <a
                        href="/"
                        className="py-4 px-2 text-blue-500 font-semibold ">
                        Home
                    </a>
                    <a
                        href="#repos"
                        className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
                        Projects
                    </a>
                    <a
                        href="https://www.buymeacoffee.com/MrDark"
                        className="bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300">
                        Donate
                    </a>
                    </div>
                     <div className="mr-10 flex md:hidden">
                      <button className="inline-flex items-center justify-center p-2 rounded-md text-dark" onClick={onMenuChange}>
                        {menu ? <AiOutlineClose/> : <GiHamburgerMenu/> }
                      </button>
                    </div>
            </div>
        </div>
         <div className={menu? "" : "hidden"}>
		 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden"> 
    <a href="" className=" cursor-pointer text-white text-blue-500 block px-3 py-2 hover:text-blue-500 rounded-md text-base font-medium transition duration-300 ">Home </a>
            <a 
             href="#repos"
             className=" cursor-pointer  text-white block px-3 py-2 hover:text-blue-500 rounded-md text-base font-medium transition duration-300">
             Projects
            </a>
                <a
                        href="https://www.buymeacoffee.com/MrDark"
                        className=" cursor-pointer  bg-purple-600 text-white block px-3 py-2 hover:bg-purple-800 rounded-md text-base font-medium transition duration-300">
                        Donate
                    </a>
            
         </div>
        </div>
    </nav>
    )
}

export default Header
