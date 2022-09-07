import React, { useCallback, useRef, useState, SyntheticEvent } from 'react';
import { gql, useMutation } from '@apollo/client';

import Nav from './component/Nav';
import FancyPill from './component/FancyPill';
import './App.css';

const CREATE_USER = gql`
  mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
    }
  }
`;

function App() {
  const [emailError, setEmailError] = useState(false);
  const inputElement = useRef<HTMLInputElement>(null);
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const formHandler = useCallback(
    () => (event: SyntheticEvent) => {
      event.preventDefault();

      const email = inputElement.current?.value || '';

      if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
        setEmailError(false);
        createUser({ variables: { input: { name: 'asdftwo', username: 'asdftwo', email } } });

        // @ts-ignore
        inputElement.current.value = "";
      } else {
        setEmailError(true);
      }
    },
    [createUser, setEmailError]
  );

  return (
    <div className="App" style={{backgroundImage: "url(/svg/illustration.svg)"}}>
     <Nav />
     <main className="App-main">
      <FancyPill cta="Visit our careers page" href="/jobs" text="we're hiring" />
      <h1>A better way to <span>ship web apps</span></h1>
      <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
      <form className="App-form" onSubmit={formHandler()}>
        <span className="App-form-error">{emailError ? 'Please enter a valid email' : '\u00A0'}</span>
        <input type="text" placeholder="Enter your email" ref={inputElement} />
        <input type="submit" value="Start free trial" />
        <p className="App-legal">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="/terms-of-service">terms or service</a>.</p>
      </form>
     </main>
    </div>
  );
}

export default App;
