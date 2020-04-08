import React from 'react'
import { Nav, Box } from 'grommet'
import { IMenu } from './types'
import Link from '../../components/Link'

export default function HomeNav({ menu }: { menu: IMenu[] }) {
  return (
    <Nav justify="center" direction="row" pad="medium">
      {menu &&
        menu.map((item) => (
          <Link href={item.path}>
            <Box key={item.menuId}>{item.title}</Box>
          </Link>
        ))}
    </Nav>
  )
}
