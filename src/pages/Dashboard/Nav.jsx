import { Link } from 'react-router-dom';
import logo from '../../assets/img_logo_icon/logo.png';
import wman from '../../assets/img_logo_icon/women.png';

const Nav = () => {
  return (
    <div className="navbar bg-base-100 fixed w-full">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
      </div>
 
      <div className="navbar-end flex items-center">
        <Link className=" bg-white border-hidden"><img src={wman} alt="" /></Link>
        
        
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
