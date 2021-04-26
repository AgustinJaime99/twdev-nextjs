import AppLayout from "../../components/AppLayout"

export default function HomePage() {
  return (
    <>
      <AppLayout>
        <header>
          <h2>Home</h2>
        </header>
        <section></section>
        <nav></nav>
      </AppLayout>
      <style jsx>
        {`
          header {
            border-bottom: 1px solid;
            height: 49px;
            display: flex;
            align-items: center;
            position: fixed;
            top: 0;
            width: 100%;
          }

          section {
            padding-top: 100px;
          }

          h2 {
            font-size: 20px;
            font-weight: 700;
          }

          nav {
            bottom: 0;
            border-top: 1px solid;
            height: 49px;
            width: 100%;
            position: fixed;
            display: flex;
          }
        `}
      </style>
    </>
  )
}
