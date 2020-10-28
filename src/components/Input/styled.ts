import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  margin: 15px 0px;
  border-color:red;
`;
export const StyledInput = styled.input`
  position: relative;

  border: none;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 5px 0 5px 7px;

  background: none;
  font-size: inherit;
  border: 2px solid #6D6D6D;
  
  &:focus {
    outline: none;
    border: 2px solid black;
  }

  &::placeholder{
      color: #C1C1C1;
  }
`;