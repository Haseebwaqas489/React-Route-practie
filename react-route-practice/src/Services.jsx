import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services Page</h1>
      
      {/* Absolute Paths (/services/app aur /services/web) */}
      <nav style={{ display: "flex", gap: "15px", margin: "10px 0" }}>
        <Link to="/services/app">App Services</Link>
        <Link to="/services/web">Web Services</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Services;