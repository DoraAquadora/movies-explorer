import './App.css';
import { Route, Routes} from 'react-router-dom';
//import { useState, useEffect } from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

function App (){
  return (
    <div className='app' >
      <div className='app__content'>
        <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                loggedOut
              />
              <Main />
            </>
          }
        />
        <Route
        path='/signup'

        element={
          <>
          <Register/>
          </>
        }
        />
        <Route 
        path='/signin'
        element={
          <>
          <Login/>
          </>
        }
        />
        <Route
        path='/movies'
        element={
          <>
            <Header
          loggedIn
        />
          <Movies/>
          </>
        }
        />
        <Route
        path='/profile'
        element={
          <>
          <Header
          loggedIn
        />
          <Profile/>
          </>
        }
        />

        <Route
        path='/saved-movies'
        element={
          <>
          <Header
          loggedIn
        />
          <SavedMovies/>
          </>
        }
        />
        <Route path='*'
        element={
          <NotFound/>
          
        }
        />
        
        </Routes>
      </div>
    </div>

  );
}

export default App;
