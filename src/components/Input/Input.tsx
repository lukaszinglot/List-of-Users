import React, { FC } from 'react';
import { StyledInputWrapper, StyledInput, StyledLabel } from './styled';

interface InputProps {
  handleValueChange: (value: string) => void;
  value: string;
}

export const Input: FC<InputProps> = ({ handleValueChange, value }) => {

  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor="userSearch">User Search:</StyledLabel>
      <StyledInput
        value={value}
        placeholder={'Search by user name...'}
        onChange={e => handleValueChange(e.target.value)}
        name="userSearch"
      />
    </StyledInputWrapper>
  );
};

export default Input;