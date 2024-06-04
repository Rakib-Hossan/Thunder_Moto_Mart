
export default function Banner() {
  return (
    <div className="container mx-auto">
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Ride the Dream <br /> Live the Freedom</h1>
                <p className="py-6"> At Thunder Moto Mart, we offer premium motorcycles and exceptional service to ignite your passion for riding. Discover the freedom of the open road with our top-quality bikes. "Ride the Dream, Live the Freedom" with Thunder Moto Mart—your ultimate destination for all things motorbike.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}
