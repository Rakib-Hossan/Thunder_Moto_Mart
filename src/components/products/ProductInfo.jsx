import { Link, useLoaderData } from "react-router-dom"

export default function ProductInfo() {

    const product = useLoaderData();

  return (
    <div className="container mx-auto">
        <div className="hero">
            <div className="hero-content gap-12 flex-col-2">
                <img src={product?.image} className="flex-1 md:w-[450px]"  />
                <div className="flex-1 md:px-10 ">
                  <h1 className=" text-3xl md:text-xl text-violet-600 font-bold ">{product?.model}</h1>
                  <p className="py-6 font-semibold">{product?.brand}</p>
                  <p className="py-6 text-zinc-700">{product?.price}</p>
                  <div className="flex gap-4 items-center ">
                    <div><p className="border-2 rounded px-6 py-3 text-xl font-semibold bg-violet-600 text-white">{product?.price} tk</p></div> 
                    <div><Link to={'/'}><button className="btn btn-success flex-1 text-white">Buy Now</button></Link></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
