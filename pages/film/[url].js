
import Head from "next/head";
export default function FilmDetay({ movie }) {
    console.log(movie);
    return <div className="w-[1200px] my-[20px] mx-auto">
        <Head>
            <title>{movie.title}</title>
        </Head>
        <h3 className="text-[30px] font-bold mb-[20px]">{movie.title} </h3>
        <div className="text-lg text-[#666] leading-relaxed">
            {movie.overview}
        </div>

    </div>
}

export async function getServerSideProps({ params }) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=bfb5af5be609f3f8e791c601eca04dc0&language=tr-TR`)
    const movie = await request.json()
    return {
        props: {
            movie
        }
    }
}