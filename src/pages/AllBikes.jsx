import { useEffect, useState } from "react";
import SingleProducts from "../components/products/SingleProducts";

export default function AllBikes() {

    const [products,setProducts] = useState();

    useEffect(()=>{
        fetch('http://localhost:3000/bikes')
        .then((res)=>res.json())
        .then((data)=>setProducts(data));
    },[]);

    const handleDeleteProduct = (id) => {
      setProducts(products.filter((product)=>product.id!==id));
    };
  return (
    <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 px-6 justify-center items-center py-8">
            {
              products?.map(product=><SingleProducts key={product?.id} product={product} onDelete={handleDeleteProduct}/>)
            }
        </div>
    </div>
  )
}
