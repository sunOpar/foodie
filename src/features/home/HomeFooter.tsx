import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 10vh;
  justify-content: center;
  padding-top: 12px;
  outline: none;
  border-top: 1px solid rgb(234, 234, 234);
  flex: 0 0 auto;
`

export default function HomeFooter() {
  return <StyledFooter>Powered by 徐亚光</StyledFooter>
}
