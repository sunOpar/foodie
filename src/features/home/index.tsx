import styled from 'styled-components'
import MyEditor from './MyEditor'
import Sidebar from './sidebar'

const EditorWrap = styled.div`
  width: 900px;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(55, 53, 47);
  padding: 96px 96px 30vh;
  font-size: 16px;
  line-height: 1.4;
`
const HomeWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`

const HomeView = () => {
  return (
    <HomeWrap>
      <Sidebar />
      <EditorWrap>
        <MyEditor />
      </EditorWrap>
    </HomeWrap>
  )
}

export default HomeView
