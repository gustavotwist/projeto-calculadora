
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row, Column } from './styles';

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Row>
          <Button label="1"/>
          <Button label="2"/>
          <Button label="3"/>
          <Button label="4"/>
        </Row>
        <Row>
          <Button label="5"/>
          <Button label="6"/>
          <Button label="7"/>
          <Button label="1"/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
