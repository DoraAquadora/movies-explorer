import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormAndValidation } from '../../hooks/useFormAndValidation'
import './Register.css';
import Logo from '../Logo/Logo';

function Register({ onRegister, isLoggedIn, }) {
  const { values, handleChange,  setIsValid } =
    useFormAndValidation();
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault()
    onRegister(values.name, values.email, values.password)
  };

  useEffect(() => {
    isLoggedIn && navigate('/movies')
  }, [isLoggedIn]);

  useEffect(() => {
    setIsValid(false)
  }, []);

  return (
    <div className="form">
      <Logo login/>
      <h2 className="form__title">Добро пожаловать!</h2>
      <form className="form__container" noValidate onSubmit={handleRegister} >
      <label className="form__placeholder">
        Имя
        <input
          name="name"
          placeholder='имя'
          className="form__input"
          id="name"
          type="text"
          minLength="2"
          maxLength="40"
          value={values.name || ''}
          onChange={handleChange}
          required
        />
      </label>
      <label className="form__placeholder" htmlFor="email-input">
        E-mail
        <input 
        name="email"
        placeholder='email'
        className="form__input" 
        id="email" 
        type="email"
        value={values.email || ''}
        onChange={handleChange}
        required />
      </label>
      <label className="form__placeholder">
        Пароль
        <input 
        name="password"
        placeholder='Пароль'
        className="form__input" 
        id="password" 
        type="password"
        minLength="2"
        maxLength="40"
        value={values.password || ''}
        onChange={handleChange}
        required />
      </label>
      <button type='submit' className="form__button" > Зарегистрироваться </button>
      </form>
      <p className="form__text">
      Уже зарегистрированы?
        <Link className="form__link" to='/signin'>Войти</Link>
      </p>
    </div>
  );
}

export default Register;
