import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';

function Register() {
  return (
    <div className="form">
      <Logo login/>
      <h2 className="form__title">Добро пожаловать!</h2>
      <form className="form__container" >
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
