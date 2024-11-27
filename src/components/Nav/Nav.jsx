import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
