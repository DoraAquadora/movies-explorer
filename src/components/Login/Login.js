import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import {EMAIL_REGEX} from '../../hooks/useFormAndValidation';
import Logo from '../Logo/Logo';
import './Login.css';

const Login = ({ onLogin, isLoggedIn, error, errMsg }) => {
  const { values, handleChange, errors, isValid, setIsValid } =
    useFormAndValidation()
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    onLogin(values.email, values.password)
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/movies');
    }
  }, [isLoggedIn])

  useEffect(() => {
    setIsValid(false)
  }, [])

  return (
    <main>
      <section className="form">
            <Logo login />
            <h1 className="form__title">Рады видеть!</h1>
            <form className="form__container" noValidate onSubmit={handleLogin}>
            <div className="form__input-fields">
                <div className="form__input-field"> 
                  <label className="form__placeholder" htmlFor="email-input">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form__input form__input-field_email"
                    id="email-input"
                    value={values.email || ''}
                    onChange={handleChange}
                    pattern={EMAIL_REGEX}
                  />
                  <span
                    className={`text-input-error input__error input__error-field ${
                      isValid ? '' : 'input__error_visible'
                    }`}
                  >
                    {errors.email}
                  </span>
                </div>
                <div className="form__input-field">
                  <label className="form__placeholder" htmlFor="password-input">
                    Пароль
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="form__input sign__input_field_password"
                    id="password-input"
                    value={values.password || ''}
                    onChange={handleChange}
                  />
                  <span
                    className={`text-input-error input__error input__error-field ${
                      isValid ? '' : 'input__error_visible'
                    }`}
                  >
                    {errors.password}
                  </span>
                </div>
                {error && <span className="form__error">{errMsg.errorText}</span>}
              </div>
              <button
                type="submit"
                className={`form__button  ${
                  !isValid ? 'form__button_inactive' : ''
                }`}
                disabled={!isValid}
              >
                Войти
              </button>
            </form>
          <p className="form__text">
            Ещё не зарегистрированы?{' '}
            <Link to="/signup" className="form__link">
              Регистрация
            </Link>
          </p>
      </section>
    </main>
  )
}

export default Login;
