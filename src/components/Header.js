import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexs/AuthProvider';
import cookies from "react-cookies";


function Header() {

  const { isLogged, setIsLogged } = useContext(AuthContext);

  function logOut() {
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('_id');
    setIsLogged(false);
  }

  return (
    <nav className="navbar">
      <div className="first">
        <div className="second">Posts and comments</div>
      </div>
      <div className="third">
        {isLogged && <Link to="/" className="forth">Main</Link>}
        {isLogged && <button  className="fifth">{cookies.load('username')}</button>}
        {isLogged && <Link to="/login" className="sixth" onClick={logOut}>Logout</Link>}
        <span className="seventh"></span>
       
      </div>
    </nav>
  )
}

export default Header