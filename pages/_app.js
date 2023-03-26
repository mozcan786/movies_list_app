
import '../styles/globals.css'
import '../styles/reset.css'
import Header from '../components/header'
export default function App({ Component, pageProps }) {
    return <>
    <div className='bg-orange-100'>

        <Header />
        <Component {...pageProps} />
    </div>
    </>
}