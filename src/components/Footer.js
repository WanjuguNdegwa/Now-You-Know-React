import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const {pathname} = useLocation();

  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      {pathname !== '/about' && <Link to="/about">About</Link>}
    </footer>
  )
}

export default Footer