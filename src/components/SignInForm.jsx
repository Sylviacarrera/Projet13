import InputWrapper from './InputWrapper';
import RememberMe from './RememberMe';
import '../styles/SignIn.scss';
import icone from '../assets/img/la-personne.png'; // Importez l'image ici
import { useRef } from 'react';
import { postLogin } from '../features/user/userApi';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignInForm = () => {
  const form = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const formInfo = {
      email: form.current[0].value,
      password: form.current[1].value
    }

    return postLogin(formInfo)
      .then(data => {
        if (data.body) {
          dispatch(setToken(data.body.token))
          navigate('/profile')
        } else {
          setError(data.message)
        }
      }).catch(error => {
        setError(error.message || error)
      })


  }


  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <div className="sign-in-icon-container">
          <img src={icone} alt="User Icon" className="sign-in-icon" />
        </div>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <InputWrapper label="Username" type="text" id="username" />
          <InputWrapper label="Password" type="password" id="password" />
          <RememberMe />
          <button className="sign-in-button">Sign In</button>
        </form>

        <p className='error'>{error}</p>
      </section>
    </main>
  )
}

export default SignInForm;
