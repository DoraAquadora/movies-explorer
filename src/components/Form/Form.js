import { Link } from 'react-router-dom';
import './Form.css';
import Headerimg from '../../images/logo.svg';

function Form({ children, title, buttonText, text, routText, rout, buttonRout }) {
  return (
    <div className="form">
      <Link to="/" className="form__img">
        <img src={Headerimg} alt="логотип" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <form className="form__container" >
        {children}
        <Link to={buttonRout} className="form__button">
        <button type='button'  className="form__button" >
          {buttonText}
        </button>
        </Link>
      </form>
      <p className="form__text">
        {text}
        <Link to={rout} className="form__link">
          {routText}
        </Link>
      </p>
    </div>
  );
}

export default Form;
