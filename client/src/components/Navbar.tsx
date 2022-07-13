import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <h1>Admin Panel</h1>
        <Link to="/">
          <b>Store</b>
        </Link>
        <Link to="/">
          <b>Users</b>
        </Link>
      </div>
    </header>
  )
}

export default Navbar