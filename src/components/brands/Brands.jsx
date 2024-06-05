import { useEffect, useState } from "react"
import BrandsCard from "./BrandsCard";

export default function Brands() {

    const [brands, setBrands]=useState();

    useEffect(()=>{
        fetch('http://localhost:3000/brand')
        .then((res)=>res.json())
        .then((data)=> setBrands(data))
    },[])
  return (
    <div className="container mx-auto">
       <div className="grid  grid-cols-2 md:grid-cols-3">
        {
            brands?.map(brand=><BrandsCard key={brands?.id} brand={brand}/>)
        }
        </div> 
    </div>
  )
}
