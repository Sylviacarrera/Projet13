import React from 'react';
import InputWrapper from './InputWrapper';
import RememberMe from './RememberMe';
import '../styles/SignIn.scss';
import icone from '../assets/img/la-personne.png'; // Importez l'image ici

const SignInForm = () => (
  <main className="main bg-dark">
    <section className="sign-in-content">
      <div className="sign-in-icon-container">
        <img src={icone} alt="User Icon" className="sign-in-icon" />
      </div>
      <h1>Sign In</h1>
      <form>
        <InputWrapper label="Username" type="text" id="username" />
        <InputWrapper label="Password" type="password" id="password" />
        <RememberMe />
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  </main>
);

export default SignInForm;
