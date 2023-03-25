import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { addToFavorites, addToHistory } from './myfunc';
import { useState } from 'react';
export default function Populer({ movies }) {
    const [favorites] = useState([]);
    console.log(favorites);
    return <div className=" max-w-[1200px] p-5 mx-auto"
    >
        <h2 className="text-4xl mb-5">Popüler Filmler</h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {movies.results.map((movie, index) => (
                <div key={index} className="relative w-full">
                    <Link href={`/film/${movie.id}`}>
                        <img className=" w-full" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="poster" />
                    </Link>
                    <h3 className="text-base absolute bottom-0 left-0 w-full text-white pt-[50px] pb-[10px] px-[20px]
                     bg-gradient-to-t from-black to-transparent">{movie.title}</h3>


                    <button onClick={() => addToFavorites(movie)} className="z-10 absolute top-0  w-16 pt-[10px] pb-[30px] px-[20px]
                            bg-gradient-to-b from-orange-500 to-transparent">
                        <FontAwesomeIcon icon={faStar} className={
                            favorites.some((fav) => fav.id === movie.id)
                                ? "text-yellow-400"
                                : "text-white"
                        } />
                    </button>

                    <button onClick={() => addToHistory(movie)} className="z-10 absolute top-0 right-0 w-16 pt-[10px] pb-[30px] px-[20px]
                     bg-gradient-to-b from-orange-500 to-transparent">
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                    </button>
                </div>
            ))}
        </div>
    </div>
}


