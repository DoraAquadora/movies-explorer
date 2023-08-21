import { Link } from 'react-router-dom';
import AccountIcon from '../../images/profile.png';
import close from '../../images/close.png';
import './Navigation.css';

function Navigation ({handleClose}) {
    return (
      <div className='navigation '>
        <div className='navigation__container'>
          <button onClick={handleClose} className='navigation__button-close' type='button'>
            <img src= {close} alt='close'/>
          </button>
          <nav className="navigation__menu">
          <Link to="/" onClick={handleClose} className="navigation__link">
            Главная
          </Link>
          <Link to="/movies" onClick={handleClose} className="navigation__link">
            Фильмы
          </Link>
          <Link to="/saved-movies" onClick={handleClose} className="navigation__link">
            Сохранённые фильмы
          </Link>
        </nav>
        <Link to="/profile" onClick={handleClose} className="navigation__account-button">
          <img src={AccountIcon} alt="аккаунт" />
        </Link>

        </div>

      </div>
    )
}


export default Navigation;