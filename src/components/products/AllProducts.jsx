import { useEffect, useState  } from "react";
import SingleProducts from "./SingleProducts";

export default function AllProducts() {

    const [products,setProducts] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then((res)=>res.json())
        .then((data)=>setProducts(data));
    },[]);

    const handleDeleteProduct = (_id) => {
      setProducts(products.filter((product)=>product._id!==_id));
   };

  return (
    <div className="container mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 justify-center items-center py-8">
            {
              products?.slice().reverse()?.slice(0,6)?.map(product=><SingleProducts key={product?._id} product={product} onDelete={handleDeleteProduct}/>)
            }
        </div>
    </div>
  )
}
