import { Link } from 'react-router-dom';
import { navLinks } from '../utils/constants';
import Theme from './Theme';
import { useEffect, useState } from 'react';
import Buttons from './decoration/Buttons';

export default function Navbar({clicked, setClicked}: {clicked: string, setClicked: (e: string) => void}) {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
    console.log(clicked);
  }, [clicked])

    return (
        <nav className="dark:bg-[#11181A] z-[99] p-6 inset-x-0 top-0 flex md:flex-col md:gap-8 justify-between items-center py-6 bg-transparent">
            <div>
                <a href="/">
                    <h1 className="whitespace-nowrap text-3xl font-semibold text-zinc-800 dark:text-gray-300 mr-5"><span className='text-violet-600'>{`<`}</span>oebelus<span className='text-violet-600'>{`/>`}</span></h1>
                </a>
            </div>
            
            <img className='rounded-lg border-2 border-violet-500 hidden md:block' src="ascii.png" alt="" />

            <div className="hidden md:flex flex-1 justify-end items-center">
                <ul className="list-none flex flex-col md:gap-6 justify-end flex-1">
                    <div className="border-2 border-violet-600 dark:border-zinc-500 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm overflow-hidden">
                        <div className="bg-violet-600 dark:bg-[#906CCF] justify-between text-white px-3 py-2 flex items-center">
                            <span className="flex items-center gap-2">
                                <img src="gifs/hobbies.png" alt="hobbies" />
                                <span className="text-xs font-mono">sitemap.txt</span>
                            </span>
                            <Buttons />
                        </div>
                        <div className="p-4 text-base overflow-x-scroll">
                            <ul className="mt-2 mx-2 flex flex-col gap-2">
                                {navLinks.map((nav, index) => (
                                    <li key={index} className="mr-10 flex items-center gap-2">
                                        <img className='w-6 h-6' src='folder.png' />
                                        <Link
                                            target={nav.id === "my_notes" ? "_blank" : "_self"}
                                            to={nav.id === "my_notes" ? 'https://oebelus.github.io/my_notes/#/my_notes/' : nav.id}
                                            onClick={() => setClicked(nav.name)}
                                            className={`font-poppins font-normal cursor-pointer text-xl hover:text-violet-600 transition-all ${clicked === nav.name ? "text-violet-600" : "dark:text-gray-300"}`}
                                        >
                                            {nav.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>  
                </ul>
                <div>
                    <Theme isBlog={false} />
                </div>
            </div>


            <div className="absolute right-5 flex md:hidden flex-1 justify-end items-center">
                {/* Menu Button */}
                <div className="absolute md:hidden flex gap-4 flex-1 justify-end items-center">
                    <div className="cursor-pointer mt-2 dark:text-gray-300" onClick={() => setToggle(prev => !prev )}>
                        <span className="material-symbols-outlined text-3xl">
                            menu
                        </span>
                    </div>
                    <Theme isBlog={false}/>
                </div>

                {/* Background Overlay */}
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-[98] transition-opacity ${toggle ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

                {/* Sliding Navbar */}
                <div
                    className={`${toggle ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-64 bg-gradient-to-b bg-violet-300 dark:bg-purple-900 p-6 z-[99] transition-transform duration-300 ease-in-out`}>
                    <div className="flex justify-between items-center mb-6">
                        <div className="cursor-pointer dark:text-gray-300" onClick={() => setToggle(false)}>
                            <span className="material-symbols-outlined text-3xl">
                                close
                            </span>
                        </div>
                    </div>
                    <ul className="list-none flex flex-col justify-start items-start gap-4 p-4">
                        {
                        navLinks.map((nav, index) => (
                            <li key={nav.id}>
                                <a 
                                    target={nav.id === "my_notes" ? "_blank" : "_self"}
                                    href={nav.id === "my_notes" ? 'https://oebelus.github.io/my_notes/#/my_notes/' : nav.id}
                                    className={`cursor-pointer dark:text-gray-300 text-[16px] hover:text-violet-600 transition-all ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} dark:text-white`}>
                                    {nav.name}
                                </a>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}
