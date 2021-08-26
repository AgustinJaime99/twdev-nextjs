
import NavHead from "../../components/NavHead"
import Tw from "../../components/Tw"

export default function TwPage(props) {
    return (
        <>
            <NavHead tittle={"Tweet"} icon={true}></NavHead>
            <Tw {...props}></Tw>
            <style jsx>{``}</style>

        </>
    )
}

export async function getServerSideProps(context) {
    const { params, res } = context
    const { id } = params

    const apiResponse = await fetch(`http://localhost:3000/api/twitts/${id}`)

    if (apiResponse.ok) {
        const props = await apiResponse.json()
        return { props }
    }
    if (res) {
        res.writeHead(301, { Location: "/home" }).end()
    }

}