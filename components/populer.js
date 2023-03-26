import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { addToFavorites, addToHistory } from './myfunc';
import { useState } from 'react';
import { useRouter } from "next/router";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
export default function Populer({ movies }) {
    const router = useRouter();
    const { query } = router.query
    const [favorites] = useState([]);
    console.log(favorites);
    return <div className="pt-[56px] min-h-screen max-w-[1200px] p-5 mx-auto">
        <h2 className="text-4xl mb-5">Popüler Filmler</h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {movies.results.filter(item => {

                if (query === undefined) {
                    return item
                } else if (item.title.toLowerCase().includes(query?.toLowerCase())) {
                    return item
                }
            }).map((movie, index) => (
                <div key={index} className="relative w-full">
                    { }
                    <Link href={`/film/${movie.id}`}>
                        <img className=" w-full" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="poster" />
                    </Link>
                    <h3 className="text-base absolute bottom-0 left-0 w-full text-white pt-[50px] pb-[10px] px-[20px]
                     bg-gradient-to-t from-black to-transparent">{movie.title}</h3>
                    <button onClick={() => addToFavorites(movie)} data-tooltip-id="my-tooltip" data-tooltip-content="Favorilere Ekle"
                        className="z-10 absolute top-0  w-14 pt-[10px] pb-[30px] px-[20px]
                            bg-gradient-to-b from-orange-500 to-transparent">
                        <FontAwesomeIcon icon={faStar} className={
                            favorites.some((fav) => fav.id === movie.id)
                                ? "text-yellow-400"
                                : "text-white"
                        } />
                    </button>
                    <button onClick={() => addToHistory(movie)} data-tooltip-id="my-tooltip" data-tooltip-content="İzlenenlere Ekle"
                        className="z-10 absolute top-0 right-0 w-14 pt-[10px] pb-[30px] px-[20px]
                     bg-gradient-to-b from-orange-500 to-transparent">
                        <FontAwesomeIcon icon={faClockRotateLeft} className={favorites.some((h) => h.id === movie.id)
                            ? "text-black"
                            : "text-white"
                        } />
                    </button>
                    <Tooltip id="my-tooltip" />
                </div>
            ))}
        </div>
    </div>
}


