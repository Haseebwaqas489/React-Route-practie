
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function CategoryProduct() {

  const { categoryId, productId } = useParams();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log("Category:", categoryId);
    console.log("Product ID:", productId);
    console.log("Color:", searchParams.get("color"));
  }, [categoryId, productId, searchParams]);

  return (
    <div>
      <h1>Product Details</h1>

      <h2>Category: {categoryId}</h2>

      <h2>Product ID: {productId}</h2>

      <h2>Color: {searchParams.get("color")}</h2>
    </div>
  );
}

export default CategoryProduct;

