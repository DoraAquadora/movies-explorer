import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import Profile from '../../images/account.svg';
import Navigation from "../Navigation/Navigation";
import Menu from '../../images/menu.svg';
import Logo from '../Logo/Logo';
import './header.css';


function Header ({loggedOut, loggedIn }){
  const [isClicked, setIsClicked] = useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }
    return(
      <>
      {loggedOut && (
        <header className="header">
            <Logo/>
          <nav className="header__container">
            <Link
              className="header__auth "
              to="/signup"
            >
              Регистрация
            </Link>
            <Link
              className="header__sign"
              to="/signin"
            >
              Войти
            </Link>
          </nav>
        </header>
    )}

{loggedIn && (
        <header className="header header_type_movies">
            <Logo/>
          <div className="header__container-films">
            <NavLink
              // className="header__films"
              className={({isActive}) =>
            `header__films ${isActive ? 'header__films_active' : ''} `
            }
              to="/movies"
            >
              Фильмы
            </NavLink>

            <NavLink
              className={({isActive}) =>
              `header__films ${isActive ? 'header__films_active' : ''} `
              }
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <div className="header__container-profile">
          <Link to="/profile" className="header__profile-link ">
              <img src={Profile} alt="аккаунт" className="header__profile-img" />
            </Link>
            <button onClick={handleOpen} className="header__profile-button" type='button'>
              <img src={Menu} alt="меню" />
            </button>
            </div>
            {isClicked ? <Navigation handleClose={handleClose} /> : ''}


        </header>
    )}

    </>
 );
}

export default Header;