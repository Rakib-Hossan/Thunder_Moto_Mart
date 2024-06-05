import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddProducts() {

  const[brands, setBrands] = useState();
  
  useEffect(()=>{
    fetch('http://localhost:3000/brand')
        .then((res)=> res.json())
        .then((data) => setBrands(data));
  },[]);

  const navigate = useNavigate();

  const handleAddProduct = async (e) =>{
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const model = form.model.value;
    const brand = form.brand.value;
    const image = form.image.value;
    const price = form.price.value;
    
    const productData = {id,model,brand,image,price} 
    

    await fetch("http://localhost:3000/bikes",{
      method: "POST",
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
      <h3 className="text-2xl font-bold mb-4 text-center text-green-500  mt-4">Add Product</h3>
      <form onSubmit={handleAddProduct} className="w-full px-20">
        <div className="mb-4">
          <label htmlFor="" className="font-semibold">ID</label>
          <input type="number" name="id" className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">MODEL</label>
          <input type="text" name="model" className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">PRICE</label>
          <input type="number" name="price" className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
        <label htmlFor=""className="font-semibold">Brand</label>
          <select name="brand" id="" className="w-full py-3 px-4 border-2 border-gray-500">
          {brands?.map((brand)=>(<option key={brand?.id} value={brand?.title}>{brand?.title}</option>))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">IMAGE URL</label>
          <input type="url" name="image" className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <input type="Submit" value={'Add Product'} className="w-full py-3 px-4 border bg-success text-white font-semibold"/>
        </div>

      </form>
    </div>
  )
}
