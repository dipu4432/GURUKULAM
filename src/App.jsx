import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import HOME from "./components/home";
import Footer from "./components/footer";

import Vision from "./components/Vision";
import WhyGurukulam from "./components/WhyGurukulam";
import TrustBoards from "./components/TrustBoards";

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

            <Route
              path="/why-gurukulam"
              element={<WhyGurukulam />}
            />

            <Route
              path="/trust-boards"
              element={<TrustBoards />}
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;