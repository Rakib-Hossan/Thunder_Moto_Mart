import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ProductTable({product,onDelete}) {

    const{_id,model,brand,price,image} = product;

    const handleDelete = async()=>{
        await fetch(`http://localhost:5000/bikes/${_id}`,{
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(() =>{
            toast.success('Product deleted')
            onDelete(_id);
        })
    }

  return (
    <tr>
            <th><img className="w-[40px] h-[40px] rounded-full"src={product?.image} alt="product image" /></th>
            <td>{product?.model}</td>
            <td>{product?.brand}</td>
            <td>{product?.price}</td>
            <td className="flex gap-4">
                <button className=" text-white btn btn-xs btn-neutral"><Link to={`edit-products/${_id}`}>Edit</Link></button>
                <button onClick={handleDelete} className=" text-white btn btn-xs btn-error">Delete</button>
            </td>
    </tr>
  )
}
