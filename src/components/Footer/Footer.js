import './Footer.css'

function Footer () {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
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
          href="https://github.com/DoraAquadora"
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
