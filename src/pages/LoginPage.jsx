import React from 'react';
import {
  FormStyled,
  LabelStyled,
  SubmitBtnStyled,
} from './LoginRegisterPage.Styled';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/auth.reducer';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    console.log('formData: ', formData);

    dispatch(loginThunk(formData));
  };

  return (
    <FormStyled onSubmit={handleOnSubmit}>
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
          autoComplete="on"
          required
          minLength={8}
        />
      </LabelStyled>
      <SubmitBtnStyled type="submit">Sign In</SubmitBtnStyled>
    </FormStyled>
  );
};

export default LoginPage;
