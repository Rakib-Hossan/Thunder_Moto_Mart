
export default function BrandsCard({brand}) {
  return (
    <div className='container mx-auto'>
        <div className="flex flex-col items-center m-5 ">
                <div>
                  <img className="w-[50px] md:w-[100px]" src={brand?.image} alt={brand?.title} />
                </div>
        </div>
    </div>
  )
}
