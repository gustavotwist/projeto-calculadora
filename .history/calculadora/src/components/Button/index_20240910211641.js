
import { ButtonContainer } from './styles';

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onCick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;