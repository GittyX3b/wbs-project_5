import { Route, Routes } from 'react-router-dom';

import { MainLayout } from '@layouts';
import { About, Article, Blog, Contact } from '@pages';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Blog />} />
          <Route path='/:slug' element={<Article />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
