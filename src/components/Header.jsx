import { NavLink } from 'react-router';

export const Header = () => {
  return (
    <header className='sticky top-0 z-10 flex min-h-15 justify-center border-b border-neutral-300 bg-white shadow-sm'>
      <div className='navbar bg-base-100 maxwidth-1200'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex='-1'
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-min p-2 shadow'
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
        <div className='navbar-center'>
          <a className='btn btn-ghost text-xl'>logo + name</a>
        </div>
        <div className='navbar-end'>
          <form>
            <label className='input'>
              <svg
                className='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <g
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  strokeWidth='2.5'
                  fill='none'
                  stroke='currentColor'
                >
                  <circle cx='11' cy='11' r='8'></circle>
                  <path d='m21 21-4.3-4.3'></path>
                </g>
              </svg>
              <input type='search' required placeholder='Search' />
            </label>
          </form>
        </div>
      </div>
    </header>
  );
};
