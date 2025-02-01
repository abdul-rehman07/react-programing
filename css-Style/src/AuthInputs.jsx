import { Component, useState } from 'react';
import { styled } from 'styled-components'
import Button from './components/button';
import Input from './components/input';

const Control = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 1.5rem;
`

const Label = styled.label`
display: block;
margin-bottom: 0.5rem;
font-size: 0.75rem;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
color: ${({ $invalid }) => $invalid ? "#f87171" : '#6b7280'} ;`


const Buttondiv = styled.div`
display: flex;
justify-content: flex-end;
gap: 1rem;
`
const Textbutton = styled.button`
color: #f0b322;
border: none;

&:hover {
  color: #f0920e;
}

`


export default function AuthInputs() {


  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <Control>
        <p >
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? 'lightblue' : 'lightgray'
            // }}
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </Control>
      <Buttondiv>
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </Buttondiv>
    </div >
  );
}
