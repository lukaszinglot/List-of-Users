import React, { FC } from 'react';
import { StyledInputWrapper, StyledInput } from './styled';

interface InputProps {
  handleValueChange: (value: string) => void;
  value: string;
}

export const Input: FC<InputProps> = ({ handleValueChange, value }) => {

  return (
    <StyledInputWrapper>
      <StyledInput
        value={value}
        placeholder={'Search by user name...'}
        onChange={e => handleValueChange(e.target.value)}
      />
    </StyledInputWrapper>
  );
};

export default Input;