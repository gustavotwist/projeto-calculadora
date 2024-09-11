
import { ButtonContainer } from './styles';

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onCLick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;