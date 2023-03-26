import Head from "next/head";
export default function FilmDetay({ movie }) {
    return <div className="pt-[56px] min-h-screen max-w-[1200px] w-full my-0 mx-auto">
        <Head>
            <title>{movie.title}</title>
        </Head>
        <div className="flex items-center justify-center" >
            <div className="container flex justify-center">
                <div className="w-full sm:w-full  ml-auto mr-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-3/12 bg-orange-400 p-5 sm:pb-20">
                            <h1 className="font-bold text-lg uppercase">{movie.title}</h1>
                            <div className="w-10 h-1 bg-white"></div>
                            <ul className="space-y-2 mt-2 sm:mb-8">

                                <li>
                                    <span className="text-xs text-gray-700">Tür</span>
                                    {movie.genres.map((gen, index) => (
                                        <strong key={index} className="block text-sm text-gray-700"
                                        >{gen.name}</strong>

                                    ))}
                                </li>
                                <li>
                                    <span className="text-xs text-gray-700">Yayın Tarihi</span>
                                    <strong className="block text-sm text-gray-700"
                                    >{movie.release_date}</strong>
                                </li>
                                <li>
                                    <span className="text-xs text-gray-700">Bütçe</span>
                                    <strong className="block text-sm text-gray-700"
                                    >{movie.budget}</strong                                    >
                                </li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-9/12 h-64 sm:h-auto bg-indigo-900 bg-cover relative flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white z-10 relative cursor-pointer transition duration-500 transform hover:scale-110"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                            <div className="opacity-75 bg-black w-full h-full left-0 top-0 absolute"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-3/12 bg-white flex">
                            <figure className="mt-5 mb-4 ml-auto mr-auto sm:-mt-16 sm:mr-0 sm:ml-8 sm:mb-0 w-full relative">
                                <div
                                    className="absolute w-10 h-12 -mt-3 -ml-3 bg-gray-200 z-0 hidden sm:block"
                                ></div>
                                <img
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                                    alt="poster"
                                    className="relative z-10 w-1/2 h-auto block ml-auto mr-auto sm:ml-0 sm:mr-0 sm:w-full sm:h-64 object-cover"
                                />
                            </figure>
                        </div>
                        <div className="w-full sm:w-9/12 bg-gray-100 flex">
                            <div
                                className="bg-white sm:-mt-16 sm:mr-8 w-full h-64 relative rounded-tr-lg"
                            >
                                <ul className="flex flex-wrap pl-2 pr-2 mb-2 sm:pt-5 sm:pb-5 sm:pl-8 sm:pr-8 sm:space-x-6 text-sm font-light">
                                    <li
                                        className="cursor-pointer font-semibold border-b-2 border-red-600 leading-loose pr-3"
                                    >
                                        Özet
                                    </li>

                                </ul>
                                <div className="flex flex-wrap sm:divide-x divide-gray-400 pl-2 pr-2 sm:pl-8 sm:pr-8">
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
// Film detayı için çekilen api
export async function getServerSideProps({ params }) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=bfb5af5be609f3f8e791c601eca04dc0&language=tr-TR`)
    const movie = await request.json()
    return {
        props: {
            movie
        }
    }
}