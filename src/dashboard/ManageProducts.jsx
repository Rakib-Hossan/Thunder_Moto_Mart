import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";

export default function ManageProducts() {

  const[products, setProducts] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then((res)=> res.json())
        .then((data) => setProducts(data));
    },[]);

    const handleDeleteProduct = (_id) => {
      setProducts(products.filter((product)=>product?._id!==_id));
  };

  return (
    <div className="overflow-x-auto w-[80%] py-5">
      <table className="table table-zebra">
      <thead className="text-xl">
      <tr>
        <th>Product Image</th>
        <th>Title</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        products?.map((product)=>(<ProductTable key={product?._id} product={product} onDelete={handleDeleteProduct}/>))
      }
    </tbody>
      </table>
    </div>
  )
}
