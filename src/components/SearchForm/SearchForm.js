import { useState } from 'react';
import searchimg from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({ onSearch, query, checkbox }) => {
  const [searchValue, setSearchValue] = useState(query || '')
  const [isSwitched, setSwitched] = useState(checkbox || false)

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const handleChangeCheckboxState = (e) => {
    setSwitched(e.target.checked)
    submitSettings(e.target.checked)
  }

  const submitSettings = (checked) => {
    const searchState = {
      query: searchValue,
      isShort: checked,
    }
    onSearch(searchState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitSettings(isSwitched)
  }

  return (
    <section className="searchform">
      <form className="searchform__wrap" onSubmit={handleSubmit} noValidate>
        <div className="searchform__container">
            <label className='searchform__img' htmlFor="films">
                    <img src={searchimg} alt='src' />
                </label>
            <input
              id="films"
              className="input"
              type="text"
              name="search"
              placeholder="Фильм"
              value={searchValue}
              onChange={handleChangeSearchValue}
              required
            />
            <button className="searchform__button" type="submit">Найти</button>
      </div>
          <FilterCheckbox
            checked={isSwitched}
            onChange={handleChangeCheckboxState}
          />
      </form>
    </section>
  )
}

export default SearchForm;
