import { useEffect, useState } from "react";
import TotalProduc from "./TotalProduc";

export default function DashboardHome() {
  const [products,setProducts] = useState();

    useEffect(()=>{
        fetch('http://localhost:3000/bikes')
        .then((res)=>res.json())
        .then((data)=>setProducts(data));
    },[]);
  return (
    <div>
      <h2>Total Bikes</h2>
        {
          products?.map(product=><TotalProduc key ={product?.id} product={product}/>)
        }
    </div>
  )
}
