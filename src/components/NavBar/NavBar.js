import React from 'react';
import NavCart from '../NavCart/NavCart.js';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-theme'>
        <div className='container-fluid'>
          <Link to='/Electro-Store/' className='logo'>
            <p>
              <strong>Electro-Store</strong>
            </p>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse test' id='navbarNavDropdown'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='#home'>
                  Registrate
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#home'>
                  Inicia Sesion
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#home'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Categorias
                </a>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'>
                  <li>
                    <Link to='/category/1' className='links'>
                      <p className='dropdown-item' href='#home'>
                        Procesadores
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to='/category/2' className='links'>
                      <p className='dropdown-item' href='#home'>
                        Tarjetas Madre
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to='/category/3' className='links'>
                      <p className='dropdown-item' href='#home'>
                        Memorias
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to='/category/4' className='links'>
                      <p className='dropdown-item' href='#home'>
                        Discos Duros
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to='/cart'>
              <NavCart />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
