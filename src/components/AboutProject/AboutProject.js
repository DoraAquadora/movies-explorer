import './AboutProject.css';

function AboutProject () {
    return(
      <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__content">
          <div className="about-project__info">
            <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
          <div className="about-project__info">
            <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__treck">
          <h3 className="about-project__treck-title about-project__treck-title_black">1 неделя</h3>
          <h3 className="about-project__treck-title">4 недели</h3>
          <p className="about-project__treck-description">Back-end</p>
          <p className="about-project__treck-description">Front-end</p>
        </div>
      </div>
    </section>

);
}

export default AboutProject;