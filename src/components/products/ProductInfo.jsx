import { Link, useLoaderData } from "react-router-dom"

export default function ProductInfo() {

    const product = useLoaderData();

  return (
    <div className="container mx-auto">
            <div className="flex justify-around gap-12 flex-col-2">
                <div className="basis-2/4">
                  <img src={product?.image} className="flex-1 md:w-[450px] lg:w-[600px]"  />
                </div>
                <div className="basis-2/4 md:px-10 ">
                  <h1 className=" text-3xl md:text-xl text-violet-600 font-bold py-4">{product?.model}</h1>
                  <div className="overflow-x-auto">
                      <table className="table table-zebra">
                          <tr>
                            <th>Engine</th>
                            <td>{product?.engine} cc</td>
                          </tr>
                          <tr>
                            <th>Weight</th>
                            <td>{product?.weight} kg</td>
                          </tr>
                          <tr>
                            <th>Power</th>
                            <td>{product?.power} BHP</td>
                          </tr>
                          <tr>
                            <th>Torque</th>
                            <td>{product?.torque} NM</td>
                          </tr>
                          <tr>
                            <th>Milage</th>
                            <td>{product?.milage} Kmpl</td>
                          </tr>
                          <tr>
                            <th>Brakes</th>
                            <td>{product?.brakes}</td>
                          </tr>
                          <tr>
                            <th>Tyre Types</th>
                            <td>{product?.tyre}</td>
                          </tr>
                      </table>
                  </div>
                  
                  
                  <div className="flex gap-4 items-center py-4 ">
                    <div><p className="border-2 rounded px-6 py-3 text-xl font-semibold bg-violet-600 text-white">Price: {product?.price} tk</p></div> 
                    <div><Link to={'/'}><button className="btn btn-success flex-1 text-white">Buy Now</button></Link></div>
                  </div>
                </div>
            </div>
        </div>
  )
}
