import { Link } from "react-router-dom";
import { useState } from 'react';
import Headerimg from '../../images/logo-header.png';
import Profile from '../../images/profile.png';
import Navigation from "../Navigation/Navigation";
import Menu from '../../images/icon__COLOR_icon-main.png';
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
          <Link to="/" className="header__img">
            <img src={Headerimg} alt="логотип" />
          </Link>
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
        <header className="header header__movies">
          <Link to="/" className="header__img">
            <img src={Headerimg} alt="логотип" />
          </Link>
          <div className="header__container-films">
            <Link
              className="header__films"
              to="/movies"
            >
              Фильмы
            </Link>

            <Link
              className="header__films"
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
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