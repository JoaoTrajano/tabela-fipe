import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6f1abd',
  color: 'white',
  '&:hover': {
    backgroundColor: '#4d0f7f',
  },
}));

interface ButtonProps {
  children: string;
  handleClick: (e?: any) => void;
  disable?: boolean
}

const ButtonComponent = ({ children, handleClick, disable }: ButtonProps) => {
  return (
    <CustomButton disabled={disable} onClick={handleClick}>
      {children}
    </CustomButton>
  );
};

export default ButtonComponent;
