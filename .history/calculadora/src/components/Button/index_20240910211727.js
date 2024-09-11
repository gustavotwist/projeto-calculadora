
import { ButtonContainer } from './styles';

const Button = ({label, onCick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;