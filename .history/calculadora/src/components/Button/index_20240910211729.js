
import { ButtonContainer } from './styles';

const Button = ({label, onCLick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;