import { useEffect, useState } from "react"
import { fetchLatestTwsOfUser } from "../../firebase/client"
import useUser from "../../hooks/useUser"

export default function userPage() {
    const [tws, setTws] = useState([])
    const user = useUser()

    useEffect(() => {
        if (user) {
            fetchLatestTwsOfUser()
                .then(res => {
                    setTws(res.filter(i => i.userId === user.uid))
                })
        }
    }, [user])

    console.log(tws)
    return (
        <>
            hola!
        </>
    )
}