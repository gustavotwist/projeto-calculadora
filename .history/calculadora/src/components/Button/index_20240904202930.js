
import { ButtonContainer } from './styles';

const Button = ({label, onCLick}) => {
    return (
      <ButtonContainer onClick={onCLick}>
        1
      </ButtonContainer>
    );
  }
  
  export default Button;