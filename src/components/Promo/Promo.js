import './Promo.css';
import landingLogo from '../../images/promo-img.png';
function Promo () {
    return(
        <section className="promo">
        <div className="promo__wrap">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
          <img
            className="promo__image"
            alt="Символическое изображение"
            src={landingLogo}
          />
        </div>
      </section>

    );
}

export default Promo;