import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div id='MainLayout' className='min-h-screen w-full bg-red-200'>
      MainLayout.jsx
      <Outlet />
    </div>
  );
};

export default MainLayout;
