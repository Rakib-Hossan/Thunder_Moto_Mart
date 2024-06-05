import { Link } from "react-router-dom";

export default function SingleProducts({product}) {
  return (
    <div className="container mx-auto">
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={product?.image} alt={product?.model} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product?.model}</h2>
                    <h4 className="text-xl font-semibold">Price:{product?.price} tk</h4>
                    <div className="card-actions">
                        <button className="btn btn-success text-white w-full"><Link to={`/allBikes/${product?.id}`}>See Details</Link></button>
                    </div>
                </div>
        </div>
    </div>
  )
}
