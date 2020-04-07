import HomeView from '../features/home'
import fetch from '../lib/fetch'

const Home = ({menu}) => {
  return <HomeView menu={menu} />
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
