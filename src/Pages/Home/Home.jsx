import { useLoaderData } from "react-router-dom";
import AboutSection from "./Component/AboutSection";
import Banner from "./Component/Banner";
import ServicesSection from "./Component/ServicesSection";
import ProductsSection from "./Component/ProductsSection";
import OurTeam from "./Component/OurTeam";
import WhyChooseUs from "./Component/WhyChooseUs";
import Reviews from "./Component/Reviews";
import TeamSlide from "../../AllSlider/TeamSlide";
import ContactSection from "./Component/ContactSection";
import { useEffect, useState } from "react";

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => setServices(data) )
    },[])
    return (
      <div className="relative px-5 xl:px-0 max-w-[1140px] mx-auto">
        <Banner></Banner>
        <AboutSection></AboutSection>
        <ServicesSection services={services}></ServicesSection>
        <ContactSection></ContactSection>
        <ProductsSection></ProductsSection>
        <OurTeam></OurTeam>
        <WhyChooseUs></WhyChooseUs>
        <Reviews></Reviews>
      </div>
    );
};

export default Home;
