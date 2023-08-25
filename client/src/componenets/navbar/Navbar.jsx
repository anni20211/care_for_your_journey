import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
function Navbar() {
  const {user}=useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className='container-navbar'>
      <Link to="/"  style={{textDecoration:"none", color:"inherit"}}>
      <span className='logoNavbar'>BookingLogo
        </span>
      </Link>
      {user ? user.username:(
        <div className='nav-items'>
        <button className='buttonNav'>login</button>
         <button className='buttonNav'> register </button> 
        </div>
      )
      }
      </div>
      
    </div>
  );
}

export default Navbar;
