import { useEffect, useState } from "react";
import SingleProducts from "../components/products/SingleProducts";

export default function AllBikes() {

    const [products,setProducts] = useState();
    
    const[search, setSearch] = useState(''); 

    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then((res)=>res.json())
        .then((data)=>setProducts(data));
    },[]);

    const handleDeleteProduct = (_id) => {
      setProducts(products.filter((product)=>product?._id!==_id));
    };
  return (
    <div className="container mx-auto">
      <h2 className="text-center font-bold text-3xl my-5">All Bikes</h2>
        <form onChange={(e)=>setSearch(e.target.value)}>
        <div className="my-4 mx-auto w-[70%]">
          <input type="text" name="search" placeholder="Search Bikes" className="w-full py-3 px-4 border-2 border-gray-500 rounded-xl"/>
        </div>
        </form>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 justify-center items-center py-8">
            {
              products?.filter((product=>{
                return search.toLowerCase() === ''
                ? product
                : product.model.toLowerCase().includes(search);
              }))?.map(product=><SingleProducts key={product?._id} product={product} onDelete={handleDeleteProduct}/>)
            }
        </div>
    </div>
  )
}
