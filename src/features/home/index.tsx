import Header from './Header'
import HomeNav from './HomeNav'
import { IMenu } from './types'
import HomeFooter from './HomeFooter'
import { Box } from 'grommet'

const HomeView = ({ menu }: { menu: IMenu[] }) => {
  return (
    <div className="container">
      <Header />
      <HomeNav menu={menu} />
      <Box height="70vh" />
      <HomeFooter />
    </div>
  )
}

export default HomeView
