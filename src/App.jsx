import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteNav from "./components/SiteNav";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ReservationsPage from "./pages/ReservationsPage";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-shell">
      <ScrollToTop />
      <SiteNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Routes>
        <Route path="/" element={<HomePage currentYear={currentYear} />} />
        <Route path="/menu" element={<MenuPage currentYear={currentYear} />} />
        <Route path="/gallery" element={<GalleryPage currentYear={currentYear} />} />
        <Route path="/reservations" element={<ReservationsPage currentYear={currentYear} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
