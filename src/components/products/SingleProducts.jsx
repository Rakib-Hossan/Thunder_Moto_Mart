import { Link } from "react-router-dom";

export default function SingleProducts({product}) {
  return (
    <div className="container mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={product?.image} alt={product?.model} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-violet-600">{product?.model}</h2>
                    <p>Brand: {product?.brand}</p>
                    <h4 className="text-xl font-semibold text-violet-600">{product?.price} tk</h4>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success text-white"><Link to={`/allBikes/${product?.id}`}>See Details</Link></button>
                    </div>
                </div>
        </div>
    </div>
  )
}
