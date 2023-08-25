import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './login.css';
import Logo from '../Logo/Logo';

function Login ({ onLogin, isLoggedIn, error, errMsg }) {
  const { values, handleChange, errors, isValid, setIsValid, resetForm } =
    useFormAndValidation();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault()
    onLogin(values.email, values.password)
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setIsValid(false)
  }, []);

  return (
    <div className="form">
      <Logo login/>
      <h2 className="form__title">Рады видеть!</h2>
      <form className="form__container" noValidate onSubmit={handleLogin}>
      <label className="form__placeholder">
        E-mail
        <input 
        name="email" 
        placeholder='email'
        className="form__input" 
        id="email" 
        type="email" 
        minLength="2"
        maxLength="40"
        autoComplete='on'
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
        placeholder='password'
        className="form__input" 
        id="password"
        minLength="2"
        maxLength="40"
        type="password" 
        value={values.password || ''}
        onChange={handleChange}
        required/>
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
       > Войти </button>
      </form>
      <p className="form__text">
      Еще не зарегистрированы?
        <Link className="form__link" to='/signup'>Регистрация</Link>
      </p>
    </div>
  
  );
}

export default Login;
