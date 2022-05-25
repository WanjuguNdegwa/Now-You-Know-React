
const Button = ({color, text, handleClick}) => {

  return (
    <button
      className="btn"
      style={{ backgroundColor: color}}
      onClick={handleClick}  
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

export default Button