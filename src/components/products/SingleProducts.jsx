import { Link } from "react-router-dom";

export default function SingleProducts({product}) {
  return (
    <div className="container mx-auto">
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={product?.image} alt={product?.model} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-violet-500">{product?.model}</h2>
                    <p>Price: {product?.price} BDT</p>
                    <div className="card-actions">
                        <button className="btn btn-success text-white w-full"><Link to={`/allBikes/${product?._id}`}>See Details</Link></button>
                    </div>
                </div>
        </div>
    </div>
  )
}
