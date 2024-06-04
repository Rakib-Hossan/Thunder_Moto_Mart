import { Link } from "react-router-dom";

export default function ProductTable({product,onDelete}) {

    const{id,model,brand,price,image} = product;

    const handleDelete = async(product)=>{
        await fetch(`http://localhost:3000/bikes/${id}`,{
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
            <th><img className="w-[40px] h-[40px] rounded-full"src={product?.image} alt="product image" /></th>
            <td>{product?.model}</td>
            <td>{product?.brand}</td>
            <td>{product?.price}</td>
            <td className="flex gap-4">
                <button className=" text-white btn btn-xs btn-neutral"><Link to={`edit-products/${id}`}>Edit</Link></button>
                <button onClick={handleDelete} className=" text-white btn btn-xs btn-error">Delete</button>
            </td>
    </tr>
  )
}
