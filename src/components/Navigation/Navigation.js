import { Link, NavLink } from 'react-router-dom';
import AccountIcon from '../../images/account.svg';
import close from '../../images/close.svg';
import './Navigation.css';

function Navigation ({handleClose}) {
    return (
      <div className='navigation '>
        <div className='navigation__container'>
          <button onClick={handleClose} className='navigation__button-close' type='button'>
            <img src= {close} alt='close'/>
          </button>
          <nav className="navigation__menu">
          <NavLink to="/" onClick={handleClose} 
              className='navigation__link'
          >
            Главная
          </NavLink>
          <NavLink to="/movies" onClick={handleClose} 
              className={({ isActive }) =>
              `navigation__link  ${
                isActive ? 'navigation__link_active' : ''
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" onClick={handleClose} 
              className={({ isActive }) =>
              `navigation__link  ${
                isActive ? 'navigation__link_active' : ''
              }`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" onClick={handleClose} className="navigation__account-button">
          <img src={AccountIcon} alt="аккаунт" />
        </Link>

        </div>

      </div>
    )
}


export default Navigation;