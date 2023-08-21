import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h3 className="profile__title">Привет, Виталий!</h3>
      <form className="profile__form">
        <label className="profile__placeholder" htmlFor="name-input">
          Имя
          <input
            name="name"
            className="profile__input"
            id="name-input"
            type="text"
            minLength="2"
            maxLength="40"
            required
          />
        </label>

        <div className="profile__border"></div>
        <label className="profile__placeholder">
          E-mail
          <input name="email" type='email' className="profile__input" id="email-input"  required />
        </label>
        <button type="button" className="profile__button-save">
          Редактировать
        </button>
        <button className="profile__logout" type='button'>Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;