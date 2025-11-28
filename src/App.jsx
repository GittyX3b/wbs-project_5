import MainLayout from '@layouts/MainLayout';
import About from '@pages/About';
import Contact from '@pages/Contact';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <title>app.jsx</title>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='destination'>
            <Route path=':slug' element={<Location />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
