import { useEffect, useState  } from "react";
import SingleProducts from "./SingleProducts";

export default function AllProducts() {

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
              products?.slice().reverse()?.slice(0,6)?.map(product=><SingleProducts key={product?.id} product={product} onDelete={handleDeleteProduct}/>)
            }
        </div>
    </div>
  )
}
