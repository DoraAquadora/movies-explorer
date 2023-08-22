import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'

const MoviesCard = ({ path }) => {
  const [isActive, setIsActive] = useState(false)
  const { pathname } = useLocation()
  const handleSaveClick = (e) => {
    setIsActive((current) => !current)
  }
  return (
    <li className="card">
        <img className="card__image" src={require(`../../images/${path}`)} alt="заставка"/>

      <div className="card__container">
      <div className="card__container-title">
          <h2 className="card__title">33 слова о дизайне</h2>
          {pathname === '/movies' ? (
            <button
              type="button"
              aria-label="лайк"
              className={`card__button ${
                isActive ? 'card__button_active' : ''
              }`}
              onClick={handleSaveClick}
            />
          ) : (
            <button
              type="button"
              aria-label="дизлайк"
              className="card__button-delete"
            />
          )}
        </div>
        <span className="card__time">1ч 42м</span>
        </div>

    </li>
  )
}

export default MoviesCard
