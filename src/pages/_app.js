
import '@/styles/globals.css'
import '@/styles/reset.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Head from 'next/head';
import NavBar from '@/components/Navbar';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
    return <>
        <Provider store={store}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark  w-full min-h-screen `}>
                <div className='max-w-[1280px] mx-auto'>
                    <NavBar />
                    <Component {...pageProps} />
                </div>
            </main>
        </Provider>
    </>
}