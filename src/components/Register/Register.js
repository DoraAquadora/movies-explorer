import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Register.css';
import Logo from '../Logo/Logo';

function Register({ onRegister, isLoggedIn, error, errMsg }) {
  const { values, handleChange, errors, isValid, setIsValid } =
    useFormAndValidation()
  const navigate = useNavigate()

  function handleRegister(e) {
    e.preventDefault()
    onRegister(values.name, values.email, values.password)
  }

  useEffect(() => {
    isLoggedIn && navigate('/movies')
    // eslint-disable-next-line
  }, [isLoggedIn])

  useEffect(() => {
    setIsValid(false)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="form">
      <Logo login/>
      <h2 className="form__title">Добро пожаловать!</h2>
      <form className="form__container" noValidate onSubmit={handleRegister}>
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
                    <span
      className={`email-input-error  ${
        isValid ? '' : 'input__error_visible'
      }`}
    >
      {errors.name}
    </span>
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
                            <span
      className={`email-input-error  ${
        isValid ? '' : 'input__error_visible'
      }`}
    >
      {errors.email}
    </span>
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
                            <span
      className={`email-input-error  ${
        isValid ? '' : 'input__error_visible'
      }`}
    >
      {errors.password}
    </span>
      </label>
      {error && <span className="sign__error">{errMsg.errorText}</span>}
      <button
          type="submit"
          className={`form__button ${
            !isValid ? 'form__button_disabled' : ''
          }`}
          disabled={!isValid}
       > Зарегистрироваться </button>
      </form>
      <p className="form__text">
      Уже зарегистрированы?
        <Link className="form__link" to='/signin'>Войти</Link>
      </p>
    </div>
  );
}

export default Register;
