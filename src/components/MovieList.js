import Link from "next/link"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { addToFavorites, addToHistory } from '@/utils/myfunc';
import { useState } from 'react';
import { useRouter } from "next/router";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
};

export default function MovieList({ data, name }) {
    let sortedData = data ? [...data.results] : [];

    const router = useRouter();
    const { query } = router.query
    const [favorites] = useState([]);

    return <div className="pt-[56px] min-h-screen  p-5 mx-auto">
        <h2 className="text-4xl font-bold mb-5 dark:text-light">{name}</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {sortedData.filter(item => {
                if (query === undefined) {
                    return item
                } else if (item.title.toLowerCase().includes(query?.toLowerCase())) {
                    return item
                }
            }).map((movie, index) => (
                <div key={index} className="relative w-full">
                    <Link href={`/film/${movie.id}`}>
                        <img className=" w-full h-full" src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`} alt="poster" />
                    </Link>
                    <h3 className="text-base absolute bottom-0 left-0 w-full text-white pt-[50px] pb-[10px] px-[20px]
                     bg-gradient-to-t from-black to-transparent">{movie.title}</h3>
                    <button aria-label="ekle" onClick={() => addToFavorites(movie)} data-tooltip-id="my-tooltip" data-tooltip-content="Favorilere Ekle"
                        className="z-1 absolute top-0  w-14 pt-[10px] pb-[30px] px-[20px]
                            bg-gradient-to-b from-black to-transparent">
                        <FontAwesomeIcon icon={faStar} className={
                            favorites.some((fav) => fav.id === movie.id)
                                ? "text-yellow-400"
                                : "text-white"
                        } />
                    </button>
                    <button aria-label="ekle" onClick={() => addToHistory(movie)} data-tooltip-id="my-tooltip" data-tooltip-content="İzlenenlere Ekle"
                        className="z-1 absolute top-0 right-0 w-14 pt-[10px] pb-[30px] px-[20px]
                     bg-gradient-to-b from-black to-transparent">
                        <FontAwesomeIcon icon={faClockRotateLeft} className={favorites.some((h) => h.id === movie.id)
                            ? "text-black"
                            : "text-white"
                        } />
                    </button>
                    <Tooltip id="my-tooltip" />
                </div>
            ))}
        </div>
        <div className="my-16">
        <h2 className="text-4xl font-bold mb-5 dark:text-light">Top 20</h2>
            <Slider {...settings}>
                {sortedData.map((movie) => (
                    <div key={movie.id} className=" relative">
                        <Link href={`/film/${movie.id}`}>
                            <img className=" w-full h-full" src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`} alt="poster" />
                        </Link>
                        <h3 className="text-base absolute bottom-0 left-0 w-full text-white pt-[50px] pb-[10px] px-[20px]
                     bg-gradient-to-t from-black to-transparent">{movie.title}</h3>
                        <button aria-label="ekle" onClick={() => addToFavorites(movie)} data-tooltip-id="my-tooltip" data-tooltip-content="Favorilere Ekle"
                            className="z-1 absolute top-0  w-14 pt-[10px] pb-[30px] px-[20px]
                            bg-gradient-to-b from-black to-transparent">
                            <FontAwesomeIcon icon={faStar} className={
                                favorites.some((fav) => fav.id === movie.id)
                                    ? "text-yellow-400"
                                    : "text-white"
                            } />
                        </button>
                        <button aria-label="ekle" onClick={() => addToHistory(movie)} data-tooltip-id="my-tooltip" data-tooltip-content="İzlenenlere Ekle"
                            className="z-1 absolute top-0 right-0 w-14 pt-[10px] pb-[30px] px-[20px]
                     bg-gradient-to-b from-black to-transparent">
                            <FontAwesomeIcon icon={faClockRotateLeft} className={favorites.some((h) => h.id === movie.id)
                                ? "text-black"
                                : "text-white"
                            } />
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
}


