import AppLayout from '../components/AppLayout/index'

export default function App({ Component, pageProps }) {
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    )

}