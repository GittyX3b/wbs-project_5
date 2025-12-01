import { Route, Routes } from 'react-router';

import { MainLayout } from '@layouts';
import { About, Blog, Contact } from '@pages';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Blog />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
