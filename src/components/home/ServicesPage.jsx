import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="container mx-auto">
        <div className="hero">
            <div className="flex flex-col gap-10 items-center justify-between lg:flex-row-reverse p-4">
                   <div className="basis-1/2" >
                        <img src="https://i.ibb.co/hgrKvWd/yamaha-bike-repairing-services.jpg"/>
                   </div>

                   <div className="basis-1/2 md:px-10 ">
                        <h1 className=" text-2xl md:text-3xl font-bold text-green-600 ">Our Services</h1>
                        <p className="py-6">Keep your bike performing at its best with our professional bike servicing. Our expert technicians provide thorough maintenance and repair services to ensure your ride is smooth, safe, and enjoyable.</p>
                        <p className="font-bold text-green-600 ">Ensure a smooth and safe ride with our expert bike servicing. We offer:</p>
                        <ul>
                          <li><b>Basic Tune-Up:</b> Brake and gear adjustments, chain lubrication.</li>
                          <li><b>Full Service:</b> Comprehensive inspection and cleaning.</li>
                          <li><b>Custom Builds:</b> Build your dream bike with our expert assembly.</li>
                        </ul>
                        <p className="font-bold text-green-600 pt-6 ">Why Choose Us?</p>
                        <ul>
                          <li><b>Experienced Technicians:</b> Our team has years of experience in bike maintenance and repair.</li>
                          <li><b>Quality Parts:</b> We use only the best parts and tools to ensure top-notch service.</li>
                          <li><b>Customer Satisfaction: </b> We are committed to providing excellent customer service and ensuring your complete satisfaction.</li>
                        </ul>
                        <Link to={'/'}><button className="btn btn-success mt-4 text-white ">Book for Service</button></Link>
                   </div>
              </div>
          </div>
   </div>
  )
}
