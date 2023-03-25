import Link from "next/link";

export default function Header() {
    return <header >
        <nav
            className=" relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg 
             focus:text-orange-400 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
            data-te-navbar-ref>

            <div className="max-w-[1200px]  mx-auto flex w-full flex-nowrap items-center justify-between px-6">
                <div className="flex items-center">
                    <button
                        className="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-orange-400 focus:text-orange-400 dark:hover:orange-400 dark:focus:orange-400 sm:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContentY"
                        aria-controls="navbarSupportedContentY"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
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
                    className="!visible hidden grow basis-[100%] items-center sm:!flex sm:basis-auto"
                    id="navbarSupportedContentY"
                    data-te-collapse-item>
                    <img src="/yasko-logo.png"></img>
                    <ul
                        className="mx-auto flex flex-col sm:flex-row"
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
                    <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                        <input
                            type="text"
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder=" "
                            required
                        />
                        <button
                            className="!absolute right-1 top-1 z-10 select-none rounded bg-orange-400 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase orange-400 shadow-md shadow-orange-400/20 transition-all hover:shadow-lg hover:shadow-orange-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Ara
                        </button>
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Film Ara
                        </label>
                    </div>
                </div>

            </div>
        </nav>
    </header>
}