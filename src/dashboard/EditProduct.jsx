import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function EditProduct() {

    const[brands, setBrands] = useState();
  
    useEffect(()=>{
      fetch('http://localhost:5000/brand')
          .then((res)=> res.json())
          .then((data) => setBrands(data));
    },[]);
    
    const navigate = useNavigate();

    const product = useLoaderData();
    const[_id, setId] = useState(product._id);
    const[model, setModel] = useState(product.model);
    const[price, setPrice] = useState(product.price);
    const[brand, setBrand] = useState(product.brand);
    const[image, setImage] = useState(product.image);
    const[engine, setEngine] = useState(product.engine);
    const[weight, setWeight] = useState(product.weight);
    const[power, setPower] = useState(product.power);
    const[torque, setTorque] = useState(product.torque);
    const[milage, setMilage] = useState(product.milage);
    const[brakes, setBrakes] = useState(product.brakes);
    const[tyre, setTyre] = useState(product.tyre);

    const handleEditProduct = async(e) => {

        e.preventDefault();

        const form = e.target;
        const _id = form.id.value;
        const model = form.model.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const price = form.price.value;
        const engine = form.engine.value;
        const weight = form.weight.value;
        const power = form.power.value;
        const torque = form.torque.value;
        const milage = form.milage.value;
        const brakes = form.brakes.value;
        const tyre = form.tyre.value;
        
        const productData = {_id,model,brand,image,price,engine,weight,power,torque,milage,brakes,tyre}

        await fetch(`http://localhost:5000/bikes/${product?._id}`,{
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(productData), 
          })
            .then((res) => res.json())
            .then(()=>{
              toast.success('Product update successfully!')
              form.reset();
            });
            navigate('/dashboard/manage-products');
        }

  return (
    <div className='w-full'>
      <h3 className="text-2xl font-bold mb-4 text-center text-green-500  mt-4">Edit Product</h3>
      <form onSubmit={handleEditProduct} className="w-full px-20">
        {/* <div className="mb-4">
          <label htmlFor="" className="font-semibold">ID</label>
          <input type="number" name="id" value={_id} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div> */}

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">MODEL</label>
          <input type="text" name="model" value={model} onChange={(e)=>setModel(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">PRICE</label>
          <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        
        <div className="mb-4">
          <label htmlFor=""className="font-semibold">Engine</label>
          <input type="number" name="engine" value={engine} onChange={(e)=>setEngine(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">Weight</label>
          <input type="number" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">Power</label>
          <input type="number" name="power" value={power} onChange={(e)=>setPower(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">Torque</label>
          <input type="number" name="torque" value={torque} onChange={(e)=>setTorque(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>
        
        <div className="mb-4">
          <label htmlFor=""className="font-semibold">Milage</label>
          <input type="number" name="milage" value={milage} onChange={(e)=>setMilage(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">Brakes</label>
          <input type="text" name="brakes" value={brakes} onChange={(e)=>setBrakes(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">Tyre Types</label>
          <input type="text" name="tyre" value={tyre} onChange={(e)=>setTyre(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
        <label htmlFor=""className="font-semibold">Brand</label>
          <select name="brand" id="" value={brand} onChange={(e)=>setBrand(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500">
          {brands?.map((brand)=>(<option key={brand?._id} value={brand?.title}>{brand?.title}</option>))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">IMAGE URL</label>
          <input type="url" name="image" value={image} onChange={(e)=>setImage(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <input type="Submit" value={'Edit Product'} className="w-full py-3 px-4 border bg-success text-white font-semibold"/>
        </div>

      </form>
    </div>
  )
}
