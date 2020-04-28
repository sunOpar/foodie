import styled from 'styled-components'
import Icon from '../../../components/Icon'

const Wrap = styled.div`
  background-color: rgb(247, 246, 243);
  width: 240px;
`
const Title = styled.div`
  color: rgb(55, 53, 47);
  font-weight: 500;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  padding: 0 16px;
  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
`

const CommonItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 27px;
  font-size: 14px;
  padding: 2px 16px;
  width: 100%;
  color: rgba(25, 23, 17, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(55, 53, 47, 0.08);
  }
  >svg {
    margin-right: 8px;
  }
`
const CommonWrap = styled.div`
  margin-bottom: 24px;
`

const NoteList = styled.div`
  margin-bottom: 24px;
`
const Arrow = styled(Icon).attrs({
  name:'iconarrow'
})`
  width: 9.6px;
  height: 9.6px;
`

function Sidebar() {
  return (
    <Wrap>
      <Title>亚光的空间</Title>
      <CommonWrap>
        <CommonItem>
          <Icon name="iconsearch" />
          全局搜索</CommonItem>
      </CommonWrap>
      <NoteList>
        <CommonItem>
          <Arrow />
           笔记</CommonItem>
      </NoteList>
    </Wrap>
  )
}

export default Sidebar
