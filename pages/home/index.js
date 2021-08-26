import { useEffect, useState } from "react"
import Tw from "../../components/Tw"
import useUser from "../../hooks/useUser"
import { listenLatestTws } from "../../firebase/client"

import Head from 'next/head'
import Nav from '../../components/Nav'
import NavHead from "../../components/NavHead"

export default function HomePage() {
  const [tws, setTws] = useState([])

  const user = useUser()


  useEffect(() => {
    let unsuscribe

    if (user) {
      unsuscribe = listenLatestTws(newTws => {
        setTws(newTws)
      })
    }
    return () => unsuscribe && unsuscribe()
  }, [user])

  console.log(user)

  return (
    <>

      <Head>
        <title>Home / Tw-dev</title>
      </Head>
      <NavHead tittle={"Home"} />

      <section>
        {tws.map(({ id, img, userName, avatar, content, userId, createdAt }) => {
          return (
            <Tw
              key={id}
              userName={userName}
              avatar={avatar}
              content={content}
              id={id}
              img={img}
              userId={userId}
              createdAt={createdAt}
            />
          )
        })}
      </section>
      <Nav></Nav>


      <style jsx>
        {`
          section {
            flex: 1;
          }

          article {
            padding: 10px 15px;

          }          
        `}
      </style>
    </>
  )
}
