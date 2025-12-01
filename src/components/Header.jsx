import { Hamburger, Pencil, PencilOff, Plus, Search } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

import { useAppControl } from '@context';

export const Header = () => {
  const { config, toggleEditMode } = useAppControl();
  const location = useLocation();

  return (
    <header className='sticky top-0 z-10 flex min-h-15 justify-center border-b border-neutral-300 bg-white shadow-sm'>
      <div className='navbar bg-base-100 maxwidth-1200'>
        <div className='navbar-start'>
          <NavLink to='/' className='btn btn-ghost font-gabarito text-2xl'>
            SomeOnes Diary
          </NavLink>
        </div>
        <div className='navbar-center hidden md:flex'>
          <form>
            <label className='input'>
              <Search />
              <input type='search' placeholder='Search' />
            </label>
          </form>
        </div>
        <div className='navbar-end gap-3'>
          {config.editMode && (
            <button className='btn btn-ghost btn-xs text-2xs w-max bg-green-400 p-3 text-white'>
              <Plus />
              <span>Add Entry</span>
            </button>
          )}
          {location.pathname === '/' && (
            <button className={`btn btn-ghost btn-circle p-2.5`} onClick={toggleEditMode}>
              {config.editMode ? <PencilOff /> : <Pencil />}
            </button>
          )}
          <div className='dropdown dropdown-end'>
            <button className='btn btn-ghost btn-circle'>
              <Hamburger />
            </button>
            <ul
              tabIndex='1'
              className='menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-min p-2 shadow'
            >
              <li>
                <NavLink to='/'>Blog</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
