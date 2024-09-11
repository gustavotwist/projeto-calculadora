
import { ButtonContainer } from './styles';

const Button = ({label, onCLick}) => {
    return (
      <ButtonContainer onClick={onCick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;