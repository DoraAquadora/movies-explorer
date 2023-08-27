import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import Logo from '../Logo/Logo';
import './Register.css';

const Register = ({ onRegister, isLoggedIn, error, errMsg }) => {
  const { values, handleChange, errors, isValid, setIsValid } =
    useFormAndValidation()
  const navigate = useNavigate()

  function handleRegister(e) {
    e.preventDefault()
    onRegister(values.name, values.email, values.password)
  }

  useEffect(() => {
    isLoggedIn && navigate('/movies')
  }, [isLoggedIn])

  useEffect(() => {
    setIsValid(false)
  }, [])

  return (
    <main>
      <section className="form">
            <Logo login />
            <h1 className="form__title">Добро пожаловать!</h1>
            <form className="form__container" noValidate onSubmit={handleRegister}>
              <div className="form__input-fields">
                <div className="form__input-field">
                  <label className="form__placeholder" htmlFor="name-input">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form__input form__input-field_name"
                    id="name-input"
                    value={values.name || ''}
                    onChange={handleChange}
                  />
                  <span
                    className={`text-input-error input__error input__error-field ${
                      isValid ? '' : 'input__error_visible'
                    }`}
                  >
                    {errors.name}
                  </span>
                </div>
                <div className="form__input-field ">
                  <label className="form__placeholder" htmlFor="email-input">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form__input form__input_field_email"
                    id="email-input"
                    value={values.email || ''}
                    onChange={handleChange}
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
                    className="form__input form__input_field_password"
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
                Зарегистрироваться
              </button>
            </form>
          <p className="form__text">
            Уже зарегистрированы?{' '}
            <Link to="/signin" className="form__link">
              Войти
            </Link>
          </p>

      </section>
    </main>
  )
}

export default Register;
