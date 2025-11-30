import { Outlet } from 'react-router';

import { Footer, Header } from '@components';

export const MainLayout = () => {
    return (
        <>
            <div id='wrapper' className='grid min-h-screen grid-rows-[auto_1fr_auto] bg-red-200'>
                <Header></Header>
                <main className='bg-yellow-200'>
                    <Outlet />
                </main>
                <Footer></Footer>
            </div>
        </>
    );
};
