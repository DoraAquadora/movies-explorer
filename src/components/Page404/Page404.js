import { useNavigate } from 'react-router-dom'
import './Page404.css'

function Page404() {
  const navigate = useNavigate()

  function handleMoveBack() {
    navigate(-1)
  }

  return (
    <main className="notfound">
          <h1 className="notfound__title">404</h1>
          <p className="notfound__text">Страница не найдена</p>
        <button className="notfound__button" onClick={handleMoveBack}>
          Назад
        </button>
    </main>
  )
}

export default Page404
