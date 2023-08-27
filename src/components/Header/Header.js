import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Menu from '../../images/menu.svg';
import ProfilePath from '../../images/account.svg';
import './Header.css';

function Header({ isDark, menuActive, setMenuActive  }) {
  return (
    <>
      {!isDark && (
        <header className="header header_type_logged-out">
          <Logo login/>
          <nav className="header__container header__container_type_logged-out">
            <Link
              className="header__auth header__auth_type_logged-out"
              to="/signup"
            >
              Регистрация
            </Link>
            <Link
              className="header__auth header__auth_type_logged-out header__auth_type_marked"
              to="/signin"
            >
              Войти
            </Link>
          </nav>
        </header>
      )}
      {isDark && (
        <header className="header header_type_logged-in ">
          <Logo />
          <nav className="header__container header__container_type_logged-in">
            <NavLink
              className={({ isActive }) =>
                `header__auth header__auth_type_logged-in ${
                  isActive ? 'header__auth_active' : ''
                }`
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `header__auth header__auth_type_logged-in header__auth_type_saved ${
                  isActive ? 'header__auth_active' : ''
                }`
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <div className="header__container-profile">
          <NavLink
              className={({ isActive }) =>
                `header__auth header__auth_type_logged-in header__auth_type_profile ${
                  isActive ? 'header__auth_active' : ''
                }`
              }
              to="/profile"
            >
              <img
                src={ProfilePath}
                alt="Иконка профиля"
                className="header__profile-img"
              />
            </NavLink>
            <button
              className="header__profile-button"
              onClick={() => setMenuActive(!menuActive)}
            >
              <img src={Menu} alt="меню" />
            </button>
          </div>
        </header>
      )}
    </>
  )
}

export default Header;
