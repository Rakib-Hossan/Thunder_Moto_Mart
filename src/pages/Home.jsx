import Brands from "../components/brands/Brands";
import About from "../components/home/About";
import Banner from "../components/home/Banner";
import ServicesPage from "../components/home/ServicesPage";
import AllProducts from "../components/products/AllProducts";

export default function Home() {
  return (
    <div>
        <Banner/>
        <h2 className="text-2xl font-bold text-center py-5"> Our <span className="text-green-600">Top Selling Bikes</span> Brands</h2>
        <Brands/>
        <h2 className="text-2xl font-bold text-center py-5">Our <span className="text-green-600">New arrival!!</span> Bikes</h2>
        <AllProducts/>
        <About/>
        <ServicesPage/>
    </div>
  )
}
