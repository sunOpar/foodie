import styled from 'styled-components'
import Header from './Header'
import HomeFooter from './HomeFooter'
import MyEditor from './MyEditor'

const EditorWrap = styled.div`
  width: 708px;
  margin: 24px auto;
  font-size: 16px;
  line-height: 1.4;
`

const HomeView = () => {
  return (
    <div>
      <Header />
      <EditorWrap>
        <MyEditor />
      </EditorWrap>
      <HomeFooter />
    </div>
  )
}

export default HomeView
