import Head from "next/head";
import { removeFromHistories } from '../components/myfunc';
import { useState, useEffect } from 'react';
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

// İzlenen filmleri göstermek için component
export default function Favorite() {
    const [histories, setHistories] = useState([]);
    useEffect(() => {
        // yerel depolama alanındaki izlenen filmleri al
        let storedHistories = JSON.parse(localStorage.getItem('histories'));
        console.log(storedHistories);
        if (!storedHistories) {
            storedHistories = [];
        }
        setHistories(storedHistories);
    }, []);

    // izlenen filmleri kaldırmak için fonksiyon
    function handleRemoveFromHistories(history) {
        removeFromHistories(history);
        const updatedHistories = histories.filter(h => h.id !== history.id);
        setHistories(updatedHistories);
    }

    return (
        <div className="bg-orange-100 min-h-[calc(100vh_-_56px)] max-w-[1200px] p-5 mx-auto"
        >
            <Head>
                <title>izlenen filmlerim</title>
            </Head>
            <h2 className="text-4xl mb-5">İzlenen Filmler</h2>
            {histories.length === 0 && (
                <p>Henüz izlenen film yok</p>
            )}
            {histories.length > 0 && (
                <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                    {histories.map((history, index) => (
                        <div key={index} className="relative w-full">
                            <Link href={`/film/${history.id}`}>
                                <img className=" w-full" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${history.poster_path}`} alt="poster" />
                            </Link>
                            <h3 className="text-base absolute bottom-0 left-0 w-full text-white pt-[50px] pb-[10px] px-[20px]
                     bg-gradient-to-t from-black to-transparent">{history.title}</h3>

                            {/* <button onClick={() => addToFavorites(history)} className="z-10 absolute top-0  w-16 pt-[10px] pb-[30px] px-[20px]
                            bg-gradient-to-b from-orange-500 to-transparent">
                                <FontAwesomeIcon icon={faStar} className={
                                    history.some((h) => h.id === history.id)
                                        ? "text-yellow-400"
                                        : "text-white"
                                } />
                            </button> */}

                            <button onClick={() => handleRemoveFromHistories(history)} className="z-10 absolute top-0 right-0 w-16 pt-[10px] pb-[30px] px-[20px]
                     bg-gradient-to-b from-orange-500 to-transparent">
                                <FontAwesomeIcon icon={faClockRotateLeft} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}