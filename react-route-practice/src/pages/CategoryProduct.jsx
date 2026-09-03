
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CategoryProduct() {

  const { categoryId, productId } = useParams();

  useEffect(() => {
    console.log("Category:", categoryId);
    console.log("Product ID:", productId);
  }, [categoryId, productId]);

  return (
    <div>
      <h1>Product Details</h1>

      <h2>Category: {categoryId}</h2>
      <h2>Product ID: {productId}</h2>
    </div>
  );
}

export default CategoryProduct;

