import React from 'react'
import { Box } from 'grommet'

export default function Header() {
  return (
    <Box
      pad="small"
      fill="horizontal"
      background="dark-1"
      align="center"
      as="header"
    >
      <Box as="h1">蛇皮笔记</Box>
    </Box>
  )
}
