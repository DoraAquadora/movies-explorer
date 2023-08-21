import Form from '../Form/Form';

function Login() {
  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      text="Еще не зарегистрированы?"
      routText=" Регистрация"
      rout="/signup"
      buttonRout='/movies' >
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
        <span className="form__input-error">Что-то пошло не так...</span>
      </label>
    </Form>
  );
}

export default Login;
