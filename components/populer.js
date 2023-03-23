import Link from "next/link"
export default function Populer({ movies }) {
    return <div className=" max-w-[1200px] p-5 mx-auto"
    >
        <h2 className="text-4xl mb-5">Popüler Filmler</h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {movies.results.map(movie => (
                <Link href={`/film/${movie.id}`}>
                    <div className="relative w-full">
                        <img className=" w-full" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" />
                        <h3 className="text-base absolute bottom-0 left-0 w-full text-white pt-[50px] pb-[10px] px-[20px]
                     bg-gradient-to-t from-orange-400 to-transparent">{movie.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    </div>
}

