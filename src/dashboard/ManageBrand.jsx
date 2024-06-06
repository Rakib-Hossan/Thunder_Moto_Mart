import { useEffect, useState } from "react"
import BrandTable from "./BrandTable";

export default function ManageBrand() {

    const [brands, setBrands] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/brand')
        .then((res)=>res.json())
        .then((data)=>setBrands(data));
        // console.log(data);
    },[]);

    const handleDeleteBrand = (_id) => {
        setBrands(brands.filter((brand)=>brand?._id!==_id));
    };

  return (
    <div className="overflow-x-auto w-[80%] py-5">
    <table className="table table-zebra">
    <thead className="text-xl">
    <tr>
        <th>Brand </th>
        <th>Title</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            brands?.map((brand)=>(<BrandTable key={brand?._id} brand={brand} onDelete={handleDeleteBrand}/>))
        }
    </tbody>
    </table>
    </div>
  )
}
