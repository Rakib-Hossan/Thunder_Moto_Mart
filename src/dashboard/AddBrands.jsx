import { useNavigate } from "react-router-dom";

export default function AddBrands() {

const navigate = useNavigate();

const handleAddBrand = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const image = form.image.value;

    const brandData = {id,title,image}
    
    await fetch('http://localhost:3000/brand',{
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(brandData),
    })
    .then((res)=>res.json())
    .then((brandData)=>{
        console.log(brandData)
        form.reset();
    })
    navigate('/dashboard/manage-brands');
}

  return (
    <div className='w-full'>
      <h3 className="text-2xl font-bold mb-4 text-center text-green-500  mt-4">Add Product</h3>
      <form onSubmit={handleAddBrand} className="w-full px-20">
        <div className="mb-4">
          <label htmlFor="" className="font-semibold">ID</label>
          <input type="number" name="id" className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">TITLE</label>
          <input type="text" name="title" className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">IMAGE</label>
          <input type="url" name="image" className="w-full py-3 px-4 border-2 border-gray-500"/>
        </div>

        <div className="mb-4">
          <input type="Submit" value={'Add Brand'} className="w-full py-3 px-4 border bg-success text-white font-semibold"/>
        </div>

      </form>
    </div>
  )
}
