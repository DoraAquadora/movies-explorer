import './AboutMe.css';
import MainTitle from '../MainTitle/MainTitle';
import Student from '../../images/student.png';

function AboutMe () {
    return(
        <section className='about-me '>
          <MainTitle title='Студент'/>
            <div className='about-me__container'>
                <div className='about-me__info'>
                    <h3 className='about-me__info-name'>Виталик</h3>
                    <p className='about-me__info-status'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__info-about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a
            className="about-me__info-link"
            href="https://github.com/DoraAquadora"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
                </div>

            <img className='about-me__photo' src={Student} alt='student' />
            </div>


        </section>

    );
}

export default AboutMe;