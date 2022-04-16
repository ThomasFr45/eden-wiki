import { AiFillHome, AiOutlineTeam, AiFillShop, AiFillSetting } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

const url = () => {
  const temp = window.location.href;
  const broken = temp.split("3000");
  return broken[broken.length - 1];
};

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="list">
          <Link to="shop">
            <span className="icon">
              <AiFillShop />
            </span>
            <span className="text">Shop</span>
          </Link>
        </li>
        <li className="list">
          <Link to="guild">
            <span className="icon">
              <AiOutlineTeam />
            </span>
            <span className="text">Guild</span>
          </Link>
        </li>
        <li className="list">
          <Link to="/">
            <span className="icon">
              <AiFillHome />
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li className="list">
          <Link to="wiki">
            <span className="icon">
              <FaInfo />
            </span>
            <span className="text">Wiki</span>
          </Link>
        </li>
        <li className="list">
          <Link to={url}>
            <span className="icon">
              <AiFillSetting />
            </span>
            <span className="text">
              <select>
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
