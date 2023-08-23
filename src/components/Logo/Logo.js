import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Logo.css'

function Logo({login}) {
  return (
    <Link to="/" className="header-logo">
    <img src={logo} alt="логотип"
            className={`header-logo__login ${
              login ? 'header-logo__login_type_active' : ''
            }`}
          />
  </Link>
  )
}

export default Logo;