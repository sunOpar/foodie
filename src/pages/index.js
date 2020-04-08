import Head from 'next/head'
import HomeView from '../features/home'
import fetch from '../lib/fetch'

const Home = ({ menu }) => {
  return (
    <>
      <Head>
        <title>什么值得吃</title>
      </Head>
      <HomeView menu={menu} />
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch.get('/menu')
  return {
    props: {
      menu: res.data,
    },
  }
}
export default Home
