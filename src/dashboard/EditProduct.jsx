import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function EditProduct() {

    const[brands, setBrands] = useState();
  
    useEffect(()=>{
      fetch('http://localhost:3000/brand')
          .then((res)=> res.json())
          .then((data) => setBrands(data));
    },[]);
    
    const navigate = useNavigate();

    const product = useLoaderData();
    const[id, setId] = useState(product.id);
    const[model, setModel] = useState(product.model);
    const[price, setPrice] = useState(product.price);
    const[brand, setBrand] = useState(product.setBrand);
    const[image, setImage] = useState(product.image);

    const handleEditProduct = async(e) => {

        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const model = form.model.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const price = form.price.value;
        
        const productData = {id,model,brand,image,price}

        await fetch(`http://localhost:3000/bikes/${product?.id}`,{
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(productData), 
          })
            .then((res) => res.json())
            .then((productData)=>{
              console.log(productData)
              form.reset();
            });
            navigate('/dashboard/manage-products');
        
        }

  return (
    <div className='w-full'>
      <h3 className="text-2xl font-bold mb-4 text-center text-green-500  mt-4">Edit Product</h3>
      <form onSubmit={handleEditProduct} className="w-full px-20">
        <div className="mb-4">
          <label htmlFor="" className="font-semibold">ID</label>
          <input type="number" name="id" value={id} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">MODEL</label>
          <input type="text" name="model" value={model} onChange={(e)=>setModel(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">PRICE</label>
          <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
        <label htmlFor=""className="font-semibold">Brand</label>
          <select name="brand" id="" value={brand} onChange={(e)=>setBrand(e.target.value)} className="w-full py-3 px-4 border-2 border-gray-500">
          {brands?.map((brand)=>(<option key={brand?.id} value={brand?.title}>{brand?.title}</option>))}
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
