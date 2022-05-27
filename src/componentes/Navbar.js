import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

const Navbar = () => {
    const {user, login, logout} = useContext(UserContext);
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className='container'>
                <span className="navbar-brand">
                    <h1>{ user ? `hola ${user.name}` : 'bienvenid@'}</h1>
                </span>
              {user
                ?  <button className="btn btn-secondary" onClick={logout}>cerrar sesion</button>
            
                : <button className="btn btn-secondary" onClick={login}>Iniciar sesion</button>
              }
            </div>
        </nav>
    );
}

export default Navbar;
