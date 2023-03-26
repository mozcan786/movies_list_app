import Head from 'next/head';
import Populer from '../components/populer';

export default function Index({movies}) {
  return (
    <> <div className='bg-orange-100'>
      <Head>
        <title >Anasayfa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Populer movies={movies}/>
      
    </div>
    </>
  )
}
// Populer filmler Apilerin çekildiği fonksiyon
export async function getServerSideProps() {
  const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bfb5af5be609f3f8e791c601eca04dc0&language=tr-TR&page=1`)
  const movies = await request.json()
  return {
    props: {
      movies
    }
  }
}


