import styled from 'styled-components';
import Profile from './component/Profile';
import * as data from './data';
import {useState} from 'react';

function App() {
  const [infos, setInfos] = useState(data.default);
  console.log(data.default);
  return (
    <Container>
      {infos && infos.map(info => (
        <Profile key={info.dob} {...info} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 10px;
  font-family: Chalkduster, fantasy;
`

export default App;
