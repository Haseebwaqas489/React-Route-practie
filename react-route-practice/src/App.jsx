import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./Services";
import AppServices from "./AppServices";
import WebServices from "./WebServices";
import Products from "./pages/Products";
import Mobile from "./pages/Mobile";
import CategoryProduct from "./pages/CategoryProduct";
import File from "./pages/File";

function App() {
 
  const navStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: "none",
  });

  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          backgroundColor: "#f2f2f2",
        }}
      >
        <NavLink to="/" end style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/about" style={navStyle}>
          About
        </NavLink>

        <NavLink to="/services" style={navStyle}>
          Services
        </NavLink>

        <NavLink to="/contact" style={navStyle}>
          Contact
        </NavLink>

        <NavLink to="/products" end style={navStyle}>
          Products
        </NavLink>
      </nav>

      <Routes>
       
        <Route path="/" element={<Home />} />

     
        <Route path="/about" element={<About />} />

      
        <Route path="/services" element={<Services />}>
          <Route path="app" element={<AppServices />} />
          <Route path="web" element={<WebServices />} />
        </Route>

      
        <Route path="/contact" element={<Contact />} />

       
        <Route path="/products" element={<Products />}>
         

      
          <Route path="mobile" element={<Mobile />} />

          <Route
            path=":categoryId/:productId"
            element={<CategoryProduct />}
          />

      
          <Route path="files/*" element={<File />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;