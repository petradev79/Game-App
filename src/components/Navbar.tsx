import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faHouse } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/game-app-logo.svg';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-wrapper'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='links'>
          <NavLink
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
            to='/'
          >
            <FontAwesomeIcon icon={faHouse} className='link-icon' />
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
            to='/games'
          >
            <FontAwesomeIcon icon={faTrophy} className='link-icon' />
            Games
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
