import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <b>Home</b>
        </Link>
        <Link to="/admin">
          <b>Admin panel</b>
        </Link>
        <Link to="/login">
          <b>Login</b>
        </Link>
      </div>
    </header>
  )
}

export default Navbar