import React from 'react';
import {
  FormStyled,
  LabelStyled,
  SubmitBtnStyled,
} from './LoginRegisterPage.Styled';

const RegisterPage = () => {
  const handleOnSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.userName.value;
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;
    const formData = {
      name,
      email,
      password,
    };
  };

  return (
    <FormStyled onSubmit={handleOnSubmit}>
      <LabelStyled>
        Name
        <input type="text" name="userName" placeholder="Bob Dean" required />
      </LabelStyled>
      <LabelStyled>
        Email
        <input
          type="email"
          name="userEmail"
          placeholder="Example@mail.com"
          required
        />
      </LabelStyled>
      <LabelStyled>
        Password
        <input
          type="password"
          name="userPassword"
          placeholder="********"
          minLength={8}
          autoComplete="on"
          required
        />
      </LabelStyled>
      <SubmitBtnStyled type="submit">Sign Up</SubmitBtnStyled>
    </FormStyled>
  );
};

export default RegisterPage;
