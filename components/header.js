import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const [isActive, setIsActive] = useState(false);
    function handleClick() {
        setIsActive(!isActive);
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
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }
    return <header >
        <nav
            className="  flex w-full sm:items-center justify-start bg-white py-2 text-neutral-600 shadow-lg 
             focus:text-orange-400 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-between fixed z-20"
            data-te-navbar-ref>

            <div className="max-w-[1200px]  mx-auto flex flex-col sm:flex-row w-full flex-nowrap sm:items-center justify-between px-6 ">
                <div className="flex sm:items-center">
                    <button onClick={handleClick}
                        className="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-orange-400 focus:text-orange-400 dark:hover:orange-400 dark:focus:orange-400 sm:hidden"
                        type="button"
                        >
                        <span className="[&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div 
                    className={`sm:basis-[100%] items-center sm:!flex basis-auto sm:my-0 my-5 ${isActive ? "visible" : "hidden"}`}
                    id="navbarSupportedContentY"
                    data-te-collapse-item>
                    <img src="/yasko-logo.png" className='h-56px'></img>
                    <ul
                        className="mx-auto flex flex-col sm:flex-row py-3 sm:py-0"
                        data-te-navbar-nav-ref>
                        <li data-te-nav-item-ref>
                            <Link href="/"
                                className="block transition duration-150 ease-in-out hover:text-orange-400 focus:text-orange-400 disabled:text-black/30 dark:hover:orange-400 dark:focus:orange-400 sm:p-2 [&.active]:text-black/90"
                            >Anasayfa</Link>
                        </li>
                        <li data-te-nav-item-ref>
                            <Link href="/favorite"
                                className="block transition duration-150 ease-in-out hover:text-orange-400 focus:text-orange-400 disabled:text-black/30 dark:hover:orange-400 dark:focus:orange-400 sm:p-2 [&.active]:text-black/90"
                            >Favorilerim</Link>
                        </li>
                        <li data-te-nav-item-ref>
                            <Link href="/history"
                                className="block transition duration-150 ease-in-out hover:text-orange-400 focus:text-orange-400 disabled:text-black/30 dark:hover:orange-400 dark:focus:orange-400 sm:p-2 [&.active]:text-black/90"
                            >İzlediklerim</Link>
                        </li>

                    </ul>
                    <div className="relative flex h-10 w-full  max-w-[24rem]">

                        <input
                            type="text"
                            placeholder='Film ara...'
                            value={searchTerm}
                            onChange={handleInputChange} onKeyDown={handleKeyDown}
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal 
                                text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                                placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-400 focus:border-t-transparent focus:outline-0 disabled:border-0 
                                disabled:bg-blue-gray-50"

                            required
                        />
                        <button
                            onClick={() => handleSearch()}
                            className="!absolute right-1 top-1 z-10 select-none rounded bg-orange-400 py-2 px-4 text-center align-middle font-sans text-xs 
                                font-bold uppercase orange-400 shadow-md shadow-orange-400/20 transition-all hover:shadow-lg hover:shadow-orange-400/40 focus:opacity-[0.85] 
                                focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 
                                peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Ara
                        </button>

                    </div>
                </div>

            </div>
        </nav>
    </header>
}