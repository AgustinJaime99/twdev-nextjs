import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import AppLayout from '../components/AppLayout'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { colors } from '../styles/theme';
// devit

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Twe-dev 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <Zoom cascade duration={500} delay={600}>
          <h1>
            Twe-dev
          </h1>
          <h2>
            Talk about development !
          </h2>
          </Zoom>
        <Fade duration={2500} delay={600}>
          <img src= '/twdev.png' alt='Logo'/>
        </Fade>
        </section>
        
      </AppLayout>

      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items:center;
        }

        img {
          width: 250px;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 100;
        }

        h2{
          color: ${colors.secondary};
          font-size: 24px;
          font-weight: 100;
          margin: 0;
        }

      `}</style>
    </>
  )
}
