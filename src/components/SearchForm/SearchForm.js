import './SearchForm.css';
import searchimg from '../../images/search.png';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm ({handleChange}) {
return (
    <section className='searchform'>
        <div className="searchform__wrap">
            <div className='searchform__container'>
                <label className='search__img' htmlFor="search-input">
                    <img src={searchimg} alt='src' />
                </label>
                <input
                    type="text"
                    className="input"
                    placeholder='фильм'
                    onChange={handleChange}
                />
                <button className='search__button' type='button'>Найти</button>
                <div className="searchform__line" />

            </div>
            <FilterCheckbox/>

        </div>
    </section>

);
}

export default SearchForm;
