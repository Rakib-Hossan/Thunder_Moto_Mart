import { Link } from "react-router-dom";

export default function Banner() {
  return (
          <div className="container mx-auto">
              <div className="hero ">
                  <div className="flex flex-col gap-10 items-center justify-between lg:flex-row-reverse px-4">
                        <div className="basis-1/2" >
                            <img src="https://i.ibb.co/4m6LYJ4/banner-Image.png"/>
                        </div>
                        <div className="basis-1/2 md:px-10 ">
                              <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold ">Ride the <span className="text-emerald-600">Dream, <br /> Live</span> the Freedom</h1>
                              <p className="py-6">At Thunder Moto Mart, we offer premium motorcycles and exceptional service to ignite your passion for riding. Discover the freedom of the open road with our top-quality bikes. "Ride the Dream, Live the Freedom" with Thunder Moto Mart—your ultimate destination for all things motorbike.</p>
                              <Link to={'/about'}><button className="btn btn-outline btn-success ">Learn More</button></Link>
                        </div>
                 </div>
              </div>
          </div>

  )
}
