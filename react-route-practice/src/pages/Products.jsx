
import { Link, Outlet } from "react-router-dom";
function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/products/mobile/101">
        Mobile Product 101
      </Link>
      <Outlet />
    </div>
  );
}

export default Products;

