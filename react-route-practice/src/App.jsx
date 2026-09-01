import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./Services";
import AppServices from "./AppServices";
import WebServices from "./WebServices";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />}>
    <Route path="app" element={<AppServices />} />
    <Route path="web" element={<WebServices />} />
  </Route>
  <Route path="/contact" element={<Contact />} />
</Routes>
    </>
  );
}

export default App;