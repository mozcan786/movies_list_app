import Populer from '../components/movieList';
import Head from 'next/head';
import { useEffect } from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiData } from '../store/apiSlice';
import Loader from '@/components/globals/loader';
import Error from '@/components/globals/error';

export default function Index() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.data);
  const apiStatus = useSelector((state) => state.api.status);
  const apiError = useSelector((state) => state.api.error);
  useEffect(() => {
    dispatch(fetchApiData('getUsers'));
  }, [dispatch]);
  if (apiStatus === 'loading') {
    return <Loader />
  }
  console.log(apiError);
  if (apiStatus === 'failled') { 
    return <Error/>   
  }
  return (
    <> <div className='bg-orange-100'>
      <Head>
        <title >Anasayfa</title>
        <meta name="description" content="A description of my page" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="keywords" content="my, page, keywords" />
        <meta name="author" content="My Name" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Language" content="en" />
      </Head>
      <Populer data={apiData} />

    </div>
    </>
  )
}


