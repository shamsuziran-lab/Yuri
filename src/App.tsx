import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { GalleryPage } from './pages/GalleryPage';
import { Tempahan } from './pages/Tempahan';
import { Hubungi } from './pages/Hubungi';
import { Admin } from './pages/Admin';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="tentang" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="galeri" element={<GalleryPage />} />
          <Route path="tempahan" element={<Tempahan />} />
          <Route path="hubungi" element={<Hubungi />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
