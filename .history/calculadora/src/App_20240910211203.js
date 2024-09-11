
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';



const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev}`)
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x"/>
          <Button label="/"/>
          <Button label="C"/>
          <Button label="X"/>
        </Row>
        <Row>
          <Button label="7" onCLick={() => handleAddNumber('7')}/>
          <Button label="8" onCLick={() => handleAddNumber('8')}/>
          <Button label="9"/>
          <Button label="-"/>
        </Row>
        <Row>
          <Button label="4" onCLick={() => handleAddNumber('4')}/>
          <Button label="5" onCLick={() => handleAddNumber('5')}/>
          <Button label="6" onCLick={() => handleAddNumber('6')}/>
          <Button label="+" onCLick={() => handleAddNumber('+')}/>
        </Row>
        <Row>
          <Button label="1" onCLick={() => handleAddNumber('1')}/>
          <Button label="2" onCLick={() => handleAddNumber('2')}/>
          <Button label="3" onCLick={() => handleAddNumber('3')}/>
          <Button label="=" onCLick={() => handleAddNumber('=')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
