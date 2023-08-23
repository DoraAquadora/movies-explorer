import { Link } from 'react-router-dom';
import './login.css';
import Logo from '../Logo/Logo';

function Login () {
  return (
    <div className="form">
      <Logo login/>
      <h2 className="form__title">Рады видеть!</h2>
      <form className="form__container" >
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
        required />
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
        required/>
      </label>
       <button type='submit'  className="form__button" > Войти </button>
      </form>
      <p className="form__text">
      Еще не зарегистрированы?
        <Link className="form__link" to='/signup'>Регистрация</Link>
      </p>
    </div>
  
  );
}

export default Login;
