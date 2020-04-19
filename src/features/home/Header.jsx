import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background: #333333;
  color: #f8f8f8;
  flex-direction: column;
  width: 100%;
  padding: 12px;
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>蛇皮笔记</h1>
    </StyledHeader>
  )
}
