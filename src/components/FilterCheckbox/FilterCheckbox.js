import './FilterCheckbox.css'

function FilterCheckbox ({ checked, onChange }) {
  return (
    <div className="filter-checkbox">
      <label>
        <input
          id="checkbox"
          className="filter-checkbox__checkbox"
          type="checkbox"
          name="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="filter-checkbox__pseudo"></span>
      </label>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
