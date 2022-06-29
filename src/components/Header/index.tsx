import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section className="">
      <div className="nav-container">
        <NavLink 
          to="/"
          className={({ isActive }) => isActive ?  'navlink underline' : 'navlink' }
        >
          Home
        </NavLink>
        <NavLink 
          to="/shop/"
          className={({ isActive }) => isActive ?  'navlink underline' : 'navlink' }
        >
          Shop
        </NavLink>

        <NavLink 
          to="/login/"
          className={({ isActive }) => isActive ?  'navlink underline' : 'navlink' }
        >
          Login
        </NavLink>
      </div>
    </section>
  );
}
