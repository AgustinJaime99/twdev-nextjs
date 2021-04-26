import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { colors } from '../styles/theme';
import Button from '../components/Button';
import GitHub from '../components/Icons/GitHub';
import { logWithGithub, logOut, onAuthStateChanged } from '../firebase/client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleLogOut = () => {
    logOut();
    setUser(null);
  }

  const handleClick = () => {
    logWithGithub().then(user => {
      const { avatar, username, url } = user
      setUser(user)
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <Head>
        <title>Twe-dev 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
         {user === null ? 
         ( 
           <>
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
        </>
        )
        :
        (
          null
        )
        }

          <div>
            {user === null &&
            
              <Fade duration={2500} delay={600}>
              <Button onClick={handleClick}><GitHub fill='#ffff' />Login with GitHub</Button>
              </Fade>
            
          }
            {
              user && user.avatar &&
              
              <section>
              <img className='avatar' src={user.avatar} />
              <h1>{user.username}</h1>
              <h2 className='url'>{user.email}</h2>
              <Button onClick={handleLogOut}>Log out</Button>
              </section>
            
            }
          </div>
        </section>
        
      </AppLayout>

      <style jsx>{`

        .url {
          margin-bottom: 15px;
        }

        .avatar {
          width:250px;
          border-radius:900px
        }

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
