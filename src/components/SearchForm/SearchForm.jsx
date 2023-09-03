import React from 'react';
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import searchimg from '../../images/search.svg';
import './SearchForm.css';
import tumb from '../../images/smalltumb.svg';
import tumbOff from '../../images/smalltumboff.svg';

const SearchForm = ({
  onSubmitSearch,
  onTumbClick,
  tumbValue,
  savedPrintedString,
}) => {
  const location = useLocation();
  const { values, handleChange } = useForm({
    searchForm: location.pathname === '/movies' ? savedPrintedString : '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitSearch(values.searchForm);
  };
  const handleClick = () => {
    onTumbClick(values.searchForm);
  };
  return (
    <section className="searchform">
      <form
        className="searchform__wrap"
        onSubmit={handleSubmit}
      >
        <div className="searchform__container">
        <label className='searchform__img' htmlFor="films">
                    <img src={searchimg} alt='src' />
                </label>
          <input
            type="text"
            placeholder="Фильм"
            className="input"
            onChange={handleChange}
            value={values.searchForm ? values.searchForm : ''}
            name="searchForm"
          />
            <button className="searchform__button" type="submit">Найти</button>
        </div>

      <div className="searchform__tumb-container">
        <img
          className="searchform__tumb"
          onClick={handleClick}
          src={tumbValue ? tumb : tumbOff}
          alt="переключатель"
        />
        <p className="searchform__text">Короткометражки</p>
      </div>
      {/* <div className="line line_color_grey searchform__line-margin" /> */}
      </form>
    </section>
  );
};

export default SearchForm;
