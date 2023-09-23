import { Link } from "react-router-dom";
import { navConfig } from "../../../config";

const Nav = () => {
  return (
    <nav>
      <ul>
        {navConfig.map(({ id, title, link }) => {
          return (
            <li key={id}>
              <Link to={link}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
