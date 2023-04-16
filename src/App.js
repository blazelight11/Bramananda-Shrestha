import styled from 'styled-components';
import { Pages } from './Pages/Pages';

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */
  @media screen and (max-width : 700px) {
    width: 100%;
  }
`

function App() {
  return (
    <div className="App">
     <Container>
      <Pages />
     </Container>
    </div>
  );
}

export default App;
