
export default function BrandsCard({brand}) {
  return (
    <div className='container mx-auto'>
        <div>
            <img src={brand?.image} alt={brand?.title}/>
        </div>
    </div>
  )
}
