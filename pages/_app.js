
import '../styles/globals.css'
import '../styles/reset.css'
import Header from '../components/header'

export default function App({ Component, pageProps }) {
    return <>
        <Header />
        <Component {...pageProps} />
    </>
}