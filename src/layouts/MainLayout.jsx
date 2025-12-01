import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@components';
import { DiaryProvider } from '@context';

export const MainLayout = () => {
  return (
    <div id='wrapper' className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <DiaryProvider>
        <Header></Header>
        <main className='flex justify-center bg-neutral-100'>
          <div className='maxwidth-1200 w-full p-3 sm:p-10'>
            <Outlet />
          </div>
        </main>
      </DiaryProvider>
      <Footer></Footer>
    </div>
  );
};
