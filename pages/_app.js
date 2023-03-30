
import '../styles/globals.css'
import '../styles/reset.css'
import Header from '../components/header'
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
export default function App({ Component, pageProps }) {
    return <>
        <Provider store={store}>
            <div className='bg-orange-100'>
                <Header />
                <Component {...pageProps} />
            </div>
        </Provider>
    </>
}