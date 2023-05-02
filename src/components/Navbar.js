import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { SunIcon, MoonIcon } from './globals/Icon'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block  
             bg-dark absolute left-0 -bottom-0.5 
             group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`} >&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter()
    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-light my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block  
             bg-light absolute left-0 -bottom-0.5 
             group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`} >&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()

        }
    }
    const handleSearch = (event) => {
        // event.preventDefault();
        router.push(`/?query=${searchTerm}`);
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between  relative z-10 lg:px-16 md:px-12 sm:px-8 dark:text-light'>
            <button name='Menu' aria-label='Menu' className=' flex-col justify-center items-center sm:hidden flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className='w-full sm:flex justify-between items-center hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/favorite" title="Favorite" className='mx-4' />
                    <CustomLink href="/history" title="History" className='ml-4' />
                </nav>
                <nav className='flex items-center justify-center'>
                    <div className="relative flex h-10 w-full max-w-full   sm:max-w-[24rem] items-center justify-center">
                        <input
                            type="text"
                            placeholder='Film ara...'
                            value={searchTerm}
                            onChange={handleInputChange} onKeyDown={handleKeyDown}
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal 
                                outline outline-0  "
                            required
                        />
                        <button
                            onClick={() => handleSearch()}
                            className="!absolute right-1 top-1 z-1 select-none rounded  py-2 px-4 text-center align-middle font-sans text-xs 
                                font-bold uppercase "
                            type="submit"
                            data-ripple-light="true"
                            aria-label="Ara"
                        >
                            Ara
                        </button>

                    </div>
                    <button name="Theme Switcher" aria-label="theme-switcher" onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>
            {
                isOpen ?
                    <div
                        className='min-w-[70vw] flex flex-col justify-between z-50 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                        <nav className='flex items-center flex-col  justify-center'>
                            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                            <CustomMobileLink href="/favorite" title="Favorite" className='' toggle={handleClick} />
                            <CustomMobileLink href="/history" title="History" className='' toggle={handleClick} />
                        </nav>
                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <div className="relative flex h-10 w-full max-w-full   sm:max-w-[24rem] items-center justify-center">
                                <input
                                    type="text"
                                    placeholder='Film ara...'
                                    value={searchTerm}
                                    onChange={handleInputChange} onKeyDown={handleKeyDown}
                                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal 
                                outline outline-0  "
                                    required
                                />
                                <button
                                    onClick={() => handleSearch()}
                                    className="!absolute right-1 top-1 z-1 select-none rounded  py-2 px-4 text-center align-middle font-sans text-xs 
                                font-bold uppercase "
                                    type="submit"
                                    data-ripple-light="true"
                                    aria-label="Ara"
                                >
                                    Ara
                                </button>

                            </div>
                            <button name="Theme Switcher" aria-label="theme-switcher" onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            >
                                {
                                    mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </div>
                    : null
            }
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header >
    )
}

export default NavBar