import { Outlet } from 'react-router';

import { Footer, Header } from '@components';

export const MainLayout = () => {
  return (
    <>
      <div id='wrapper' className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
        <Header></Header>
        <main className='flex justify-center bg-neutral-100'>
          <div className='maxwidth-1200 w-full bg-green-200 p-10'>
            <Outlet />
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};
