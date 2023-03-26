import Head from "next/head";
import Link from "next/link";
import { removeFromFavorites } from '../components/myfunc';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

// favori filmleri göstermek için component
export default function Favorite() {
  const [favorites, setFavorites] = useState([]);

  // yerel depolama alanındaki favori filmleri al
  useEffect(() => {
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
    <div className="pt-[56px] min-h-screen max-w-[1200px] p-5 mx-auto"
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
              <button onClick={() => handleRemoveFromFavorites(fav)} data-tooltip-id="my-tooltip" data-tooltip-content="Favorilerden Kaldır"
                className="z-10 absolute top-0  w-16 pt-[10px] pb-[30px] px-[20px]
                                      bg-gradient-to-b from-orange-500 to-transparent">
                <FontAwesomeIcon icon={faStar} className={
                  favorites.some((h) => h.id === fav.id)
                    ? "text-yellow-400"
                    : "text-white"
                } />
              </button>
              <Tooltip id="my-tooltip" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}