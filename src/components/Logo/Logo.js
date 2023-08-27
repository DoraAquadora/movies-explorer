import { Link } from 'react-router-dom'
import logoPath from '../../images/logo.svg'
import './Logo.css'

function Logo(login) {
  return (
    <Link className="header-logo" to="/">
      <img
        src={logoPath}
        alt="Логотип в виде полусмайлика"
        className={`header-logo__login ${
          login ? 'header-logo__login_type_active' : ''
        }`}
      />
    </Link>
  )
}

export default Logo
