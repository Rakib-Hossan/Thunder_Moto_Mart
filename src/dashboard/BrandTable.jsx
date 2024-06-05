import { Link } from "react-router-dom";

export default function BrandTable({brand,onDelete}) {
    const {id,title,image} = brand;

    const handleDelete = async(brand)=>{
        await fetch(`http://localhost:3000/brand/${id}`,{
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            onDelete(id);
        })
    }

  return (
    <tr>
            <th><img className="w-[40px] h-[40px] rounded-full"src={brand?.image} alt="product image" /></th>
            <td>{brand?.id}</td>
            <td>{brand?.title}</td>
            <td className="flex gap-4">
                <button className=" text-white btn btn-xs btn-neutral"><Link to={`edit-brand/${id}`}>Edit</Link></button>
                <button onClick={handleDelete} className=" text-white btn btn-xs btn-error">Delete</button>
            </td>
    </tr>
  )
}
