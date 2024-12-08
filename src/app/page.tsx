import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Product } from "@/components/Product";
import Room from "@/components/Room";
import SingleProduct from "./singleproduct/page";

export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <Product/>
    <Room/>
    <Footer/>
    
    
   </div>
  );
}
