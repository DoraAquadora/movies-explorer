import './Footer.css'

function Footer () {
  return (
    <footer className="footer">
      <h4 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h4>
      <div className="footer__wrap">
        <p className="footer__copyright">&copy; 2023</p>
        <a
          href="https://practicum.yandex.ru"
          className="footer__link"
          target="_blank"
          rel="noreferrer">
          Яндекс.Практикум
        </a>
        <a
          href="*"
          className="footer__link"
          target="_blank"
          rel="noreferrer">
          Github
        </a>
      </div>

    </footer>
  )
}

export default Footer;
