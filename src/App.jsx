import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import HOME from "./components/home";
import Footer from "./components/footer";

import Vision from "./components/vision";
import Founder from "./components/aboutFounder.jsx";
import TrustBoards from "./components/trustBoards";

import Events from "./components/events.jsx";
import QRDonate from "./components/QRDonate";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HOME />} />

            <Route path="/vision" element={<Vision />} />

            <Route path="/about-founder" element={<Founder />} />

            <Route path="/trust-boards" element={<TrustBoards />} />

            <Route path="/events" element={<Events />} />

            <Route path="/qr-donate" element={<QRDonate />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
