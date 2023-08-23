import './Profile.css';
import { useState } from 'react'

function Profile() {
  const [handleChangeInputs, setHandleChangeInputs] = useState(false);

  function handleChange(e) {
    e.preventDefault()
  }

  return (
    <main>
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
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
            onClick={() => setHandleChangeInputs(!handleChangeInputs)}
            onSubmit={handleChange}
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
          type="submit"
          className="profile__submit "
          onClick={() => setHandleChangeInputs(!handleChangeInputs)}
          onSubmit={handleChange}

        >
          Сохранить
        </button>
        </>
        ) : (
          <>
          <button 
          type="button" 
          className="profile__button-save" 
           >
          Редактировать
        </button>
        <button className="profile__logout" type='button'>Выйти из аккаунта</button>
        </>
        )
        }

      </form>
    </section>
    </main>
  );
}

export default Profile;

