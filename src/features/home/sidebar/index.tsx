import styled from 'styled-components'

const Wrap = styled.div`
  background-color: rgb(247, 246, 243);
  width: 240px;
  padding: 0 14px;
`
const Title = styled.div`
  color: rgb(55, 53, 47);
  font-weight: 500;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`

const CommonItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 27px;
  font-size: 14px;
  padding: 2px 0;
  width: 100%;
  color: rgba(25,23,17,0.6);
  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
`

function Sidebar() {
  return (
    <Wrap>
      <Title>亚光的空间</Title>
      <CommonItem>全局搜索</CommonItem>
    </Wrap>
  )
}

export default Sidebar
