import React from 'react';
import NavCart from '../NavCart/NavCart.js';
import '../NavBar/NavBar.css';

function NavBar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-theme'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#home'>
            Electro-Store
          </a>
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
                <a className='nav-link active' aria-current='page' href='#home'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#home'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#home'>
                  Pricing
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
                  Dropdown link
                </a>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'>
                  <li>
                    <a className='dropdown-item' href='#home'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#home'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#home'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <NavCart initial={0} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
