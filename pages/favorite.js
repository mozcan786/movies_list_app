import Head from "next/head";
import { removeFromFavorites } from '../components/myfunc';
import { useState, useEffect } from 'react';
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'


// favori filmleri göstermek için component
export default function Favorite() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    // yerel depolama alanındaki favori filmleri al
    let storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    console.log(storedFavorites);
    if (!storedFavorites) {
      storedFavorites = [];
    }
    setFavorites(storedFavorites);
  }, []);

  // favori filmleri kaldırmak için fonksiyon
  function handleRemoveFromFavorites(fav) {
    removeFromFavorites(fav);
    const updatedFavorites = favorites.filter(favorite => favorite.id !== fav.id);
    setFavorites(updatedFavorites);
  }

  return (
    // <div>
    //     <Head>
    //         <title>Favori filmlerim</title>
    //     </Head>
    //   <h1>Favori Filmler</h1>
    //   {favorites.length === 0 && (
    //     <p>Henüz favori film yok</p>
    //   )}
    //   {favorites.length > 0 && (
    //     <ul>
    //       {favorites.map((movie,index) => (
    //         <li key={index}>
    //           <h3>{movie.id}</h3>
    //           <button onClick={() => handleRemoveFromFavorites(movie)}>Favorilerden Kaldır</button>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <div className="bg-orange-100 min-h-[calc(100vh_-_56px)] max-w-[1200px] p-5 mx-auto"
    >
        <Head>
            <title>Favori filmlerim</title>
        </Head>
        <h2 className="text-4xl mb-5">Favori Filmler</h2>
        {favorites.length === 0 && (
            <p>Henüz Favori film yok</p>
        )}
        {favorites.length > 0 && (
            <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                {favorites.map((fav, index) => (
                    <div key={index} className="relative w-full">
                        <Link href={`/film/${fav.id}`}>
                            <img className=" w-full" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${fav.poster_path}`} alt="poster" />
                        </Link>
                        <h3 className="text-base absolute bottom-0 left-0 w-full text-white pt-[50px] pb-[10px] px-[20px]
                 bg-gradient-to-t from-black to-transparent">{fav.title}</h3>

                        <button onClick={() => handleRemoveFromFavorites(fav)} className="z-10 absolute top-0  w-16 pt-[10px] pb-[30px] px-[20px]
                        bg-gradient-to-b from-orange-500 to-transparent">
                            <FontAwesomeIcon icon={faStar} className={
                                favorites.some((h) => h.id === fav.id)
                                    ? "text-yellow-400"
                                    : "text-white"
                            } />
                        </button>

                        {/* <button onClick={() => handleRemoveFromFavorites(fav)} className="z-10 absolute top-0 right-0 w-16 pt-[10px] pb-[30px] px-[20px]
                 bg-gradient-to-b from-orange-500 to-transparent">
                            <FontAwesomeIcon icon={faClockRotateLeft} />
                        </button> */}
                    </div>
                ))}
            </div>
        )}
    </div>
  );
}