import './FilterCheckbox.css'

function FilterCheckbox () {
  return (
    <div className="filtercheckbox">
      <label>
        <input
          id="checkbox"
          className="filtercheckbox__checkbox"
          type="checkbox"
          name="checkbox"
        />
        <span className="filtercheckbox__pseudo"></span>
      </label>
      <span className="filtercheckbox__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;