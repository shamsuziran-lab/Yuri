import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnnouncementBar, WhatsAppConfigNotice } from '../components/AnnouncementBar';
import { FloatingButtons, CookieNotice } from '../components/FloatingButtons';
import { ScrollToTop } from '../components/ScrollToTop';

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <AnnouncementBar />
      <WhatsAppConfigNotice />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieNotice />
    </div>
  );
}
