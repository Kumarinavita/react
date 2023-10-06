import {Link} from'react-router-dom';
import './Nav.css'

function Nav() {
  return (
    <>
  <ul>

  <Link to='/'> <li>Home</li></Link>
  <Link to='/about'> <li>About</li></Link> 
  <Link to='/contact'> <li>Contact</li></Link> 
  <Link to='/counter'><li>Counter</li></Link>
  </ul>

  </>
  );
}

export default Nav;
