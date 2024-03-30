import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
`;

export const SubmitBtnStyled = styled.button`
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 14px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
