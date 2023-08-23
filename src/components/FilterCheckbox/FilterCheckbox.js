import './FilterCheckbox.css'

function FilterCheckbox () {
  return (
    <div className="filter-checkbox">
      <label>
        <input
          id="checkbox"
          className="filter-checkbox__checkbox"
          type="checkbox"
          name="checkbox"
        />
        <span className="filter-checkbox__pseudo"></span>
      </label>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;