import Classificados from './components/Classificados';
import styled from "styled-components";

const Div = styled.div`
overflow: auto;
background-color: rgb(240, 240, 240);
`

function App() {
  return (
    <Div>
      <Classificados />
    </Div>
  );
}

export default App;