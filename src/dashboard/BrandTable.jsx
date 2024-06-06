import { Link } from "react-router-dom";

export default function BrandTable({brand,onDelete}) {
    const {_id,title,image} = brand;

    const handleDelete = async()=>{
        await fetch(`http://localhost:5000/brand/${_id}`,{
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            onDelete(_id);
        })
    }

  return (
    <tr>
            <th><img className="w-[40px] h-[40px] rounded-full"src={brand?.image} alt="product image" /></th>
            <td>{brand?.title}</td>
            <td className="flex gap-4">
                <button className=" text-white btn btn-xs btn-neutral"><Link to={`edit-brand/${_id}`}>Edit</Link></button>
                <button onClick={handleDelete} className=" text-white btn btn-xs btn-error">Delete</button>
            </td>
    </tr>
  )
}
