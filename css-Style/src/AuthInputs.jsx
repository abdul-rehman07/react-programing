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

const Authdivinput = styled.div`

width: 100%;
max-width: 28rem;
padding: 2rem;
margin: 0 auto;
border-radius: 0.5rem;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
background: linear-gradient(180deg, #474232 0%, #28271c 100%);
color: white;`


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
    <Authdivinput >
      <Control>
        <p >
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
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
        <button type="button" className="border-black rounded-md bg-blue-600 text-white px-2  ">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </Buttondiv>
    </Authdivinput >

  );
}
