import './AboutMe.css';
import Student from '../../images/student.png';

function AboutMe () {
    return(
        <section className='aboutme '>
          <h2 className="aboutme__title">Студент</h2>
            <div className='aboutme__container'>
                <div className='aboutme__info'>
                    <h2 className='aboutme__info-name'>Виталик</h2>
                    <h3 className='aboutme__info-status'>Фронтенд-разработчик, 30 лет</h3>
                    <p className='aboutme__info-about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a
            className="aboutme__info-link"
            href="https://github.com/DoraAquadora"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
                </div>

            <img className='aboutme__photo' src={Student} alt='student' />
            </div>


        </section>

    );
}

export default AboutMe;