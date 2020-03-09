import React from 'react'
import NextLink from 'next/link'

export default function Link({ children, ...props }) {
  return (
    <NextLink {...props}>
      <a>{children}</a>
    </NextLink>
  )
}
