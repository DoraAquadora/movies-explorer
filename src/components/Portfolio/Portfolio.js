import './Portfolio.css';

function Portfolio () {
    return (
        <section className='portfolio'>
      <h2 className="portfolio__title">Портфолио</h2>
          <ul className='portfolio__item '>
            <li>
              <a className='portfolio__link' href='https://github.com/DoraAquadora/how-to-learn' src= 'src' >
              <p className="portfolio__text">Статичный сайт</p><span className='portfolio__icon'/>
              </a>
            </li>
            <li>
            <a className='portfolio__link' href='https://github.com/DoraAquadora/russian-travel' src= 'src' >
              <p className="portfolio__text">Адаптивный сайт</p><span className='portfolio__icon'/>
              </a>
            </li>
            <li>
            <a className='portfolio__link' href='https://github.com/DoraAquadora/react-mesto-auth' src= 'src' >
              <p className="portfolio__text">Одностраничное приложение</p><span className='portfolio__icon'/>
              </a>
            </li>
          </ul>
        </section>

    );
}

export default Portfolio;