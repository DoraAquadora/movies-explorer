import './Profile.css';
import { useState } from 'react'

function Profile() {
  const [handleChangeInputs, setHandleChangeInputs] = useState(false);

  return (
    <section className="profile">
      <h3 className="profile__title">Привет, Виталий!</h3>
      <form className="profile__form" noValidate>
        <label className="profile__placeholder" htmlFor="name-input">
          Имя
          <input
            name="name"
            placeholder='Имя'
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
          <input 
          name="email" 
          type='email' 
          className="profile__input" 
          id="email-input"
          placeholder='Почта'
          required />
        </label>
        {handleChangeInputs ? (
          <>
          <span className='profile__submit-error'>При обновлении профиля произошла ошибка.</span>
          <button
          type="button"
          className="profile__submit "
          onClick={() => setHandleChangeInputs(!handleChangeInputs)}
        >
          Сохранить
        </button>
        </>
        ) : (
          <>
          <button 
          type="button" 
          className="profile__button-save"
          onClick={() => setHandleChangeInputs(!handleChangeInputs)}
          >
          Редактировать
        </button>
        <button className="profile__logout" type='button'>Выйти из аккаунта</button>
        </>
        )
        }

      </form>
    </section>
  );
}

export default Profile;

