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
      <Box as="h1">欢迎来到什么值得吃</Box>
      <Box>人生苦短，你，还在奋斗吗？</Box>
      <Box>反正注定是失败的，快来一起享受美食吧！</Box>
    </Box>
  )
}
