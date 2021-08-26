import { useEffect, useState } from "react"
import Button from '../../../components/Button'
import useUser from "../../../hooks/useUser"

import { addTw, uploadImage } from '../../../firebase/client'
import { useRouter } from "next/router"
import Head from "next/head"
import Avatar from "../../../components/Avatar"


const COMPOSE_STATES = {
    USER_NOT_KNOW: 0,
    LOADING: 1,
    SUCCES: 2,
    ERROR: -1
}

const DRAG_IMAGE_STATES = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3
}

export default function ComposeTwitt() {
    const user = useUser()
    const router = useRouter()

    const [msg, setMsg] = useState("")
    const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
    const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
    const [task, setTask] = useState(null)
    const [imgURL, setImgURL] = useState(null)

    useEffect(() => {
        if (task) {
            const onProgress = () => { }
            const onError = () => { }
            const onComplete = () => {
                task.snapshot.ref.getDownloadURL().then(setImgURL)
            }

            task.on("state_changed", onProgress, onError, onComplete)
        }
    }, [task])

    const handleChange = (event) => {
        const { value } = event.target
        setMsg(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStatus(COMPOSE_STATES.LOADING)
        addTw({
            avatar: user.avatar,
            content: msg,
            userId: user.uid,
            userName: user.username,
            img: imgURL,
        })
            .then(() => {
                router.push("/home")
            })
            .catch((err) => {
                console.error(err)
                setStatus(COMPOSE_STATES.ERROR)
            })
    }

    const handleDragEnter = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
    }

    const handleDragLeave = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
    }

    const handleDrop = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
        const file = e.dataTransfer.files[0]

        const task = uploadImage(file)
        setTask(task)
    }

    const isButtonDisabled = !msg.length || status === COMPOSE_STATES.LOADING

    return (
        <>

            <Head>
                <title>Create a Twitt / Tw-dev</title>
            </Head>
            <section className="form-container">
                {
                    user &&
                    <section className="avatar-container">
                        <Avatar src={user.avatar} />
                    </section>
                }
                <form onSubmit={handleSubmit}>
                    <textarea
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onChange={handleChange}
                        placeholder='Que esta pasando?'></textarea>
                    {imgURL &&
                        <section className="remove-img">
                            <button onClick={() => setImgURL(null)}>x</button>
                            <img src={imgURL} />
                        </section>}
                    <div>
                        <Button disabled={isButtonDisabled}>Twittear</Button>
                    </div>
                </form>
            </section>

            <style jsx>{`
                div {
                    padding: 15px;
                }

                button {
                    background: rgba(0, 0, 0, 0.3);
                    border: 0;
                    border-radius: 100px;
                    color: #fff;
                    font-size:24px;
                    width: 30px;
                    height: 30px;
                    top: 15px;
                    position: absolute;
                    left:15px;
                    cursor: pointer;
                }

                .form-container {
                    align-items: flex-start;
                    display: flex;
                }

                .avatar-container {
                    padding-top: 20px;
                    padding-left: 15px;
                }

                .remove-image {
                    position: relative;
                }

                form {
                    padding:10px;
                }

                img {
                    border-radius: 15px;
                    height: auto;
                    width: 100%;
                }

                textarea {
                    min-height:200px;
                    outline:0;
                    border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER ? "3px dashed #8c7def" : "3px solid transparent"};
                    border-radius: 12px;
                    padding: 15px;
                    resize: none;
                    font-size: 21px;
                    width:100%;
                }
            `}</style>
        </>
    )


}