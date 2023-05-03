import Head from 'next/head';
import { useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiData } from '@/store/apiSlice';
import MovieList from '@/components/MovieList';
import Error from '@/components/globals/Error';
import Loader from '@/components/globals/Loader';

const topRated = () => {
    const name='Top Rated Movies'
    const dispatch = useDispatch();
    const apiData = useSelector((state) => state.api.data);
    const apiStatus = useSelector((state) => state.api.status);
    const apiError = useSelector((state) => state.api.error);
    console.log(apiData);
    useEffect(() => {
        dispatch(fetchApiData('getNowPlaying'));
    }, [dispatch]);
    if (apiStatus === 'loading') {
        return <Loader />
    }
    console.log(apiError);
    if (apiStatus === 'failled') {
        return <Error />
    }
    return (
        <> <div className=''>
            <Head>
                <title >Anasayfa</title>
                <meta name="description" content="A description of my page" />
            </Head>
            <MovieList data={apiData}  name={name}/>

        </div>
        </>
    )
}

export default topRated