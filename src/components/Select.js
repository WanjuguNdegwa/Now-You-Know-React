const Select = ({options, handleChange}) => {
  return (
    <select className="form-select" onChange={(e) => handleChange(e.target.value)}>
      {options.map((arrayItem, index) => <option key={index} value={arrayItem.value}>{arrayItem.display}</option>)}
    </select>
  )
}

export default Select