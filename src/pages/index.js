import Head from 'next/head';
import { useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from '@/components/MovieList';
import Error from '@/components/globals/Error';
import Loader from '@/components/globals/Loader';
import Carousel from '@/components/Carousel';

import { fetchAPIThunk, selectAPIData, selectLoading, selectError } from '@/store/contentSlice';
import { API_ENDPOINT_1, API_ENDPOINT_2 } from '@/store/constants';


export default function Index() {
  const name = 'Populer Movies'
  const name1 = 'Now Playing Movies'
  const dispatch = useDispatch();
  const apiData = useSelector(selectAPIData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAPIThunk({ apiEndpoint: API_ENDPOINT_1 }));
    dispatch(fetchAPIThunk({ apiEndpoint: API_ENDPOINT_2 }));
  }, [dispatch]);

  return (
    <>
      <div className=''>
        {loading && <Loader/>}
        {error && <Error message={error} />}
        {!loading && !error && (
          <>
            <Head>
              <title>Anasayfa</title>
              <meta name="description" content="A description of my page" />
            </Head>
            {apiData && apiData.api1 && <Carousel data={apiData.api1}  />}
            {apiData && apiData.api1 && <MovieList data={apiData.api1} name={name} />}
            {apiData && apiData.api2 && <MovieList data={apiData.api2} name={name1} />}
          </>
        )}
      </div>
    </>
  )
}
