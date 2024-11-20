import React from 'react';
import ProductCard from '../../Products/Component/ProductCard';

const ProductsSection = () => {
    return (
        <div className="items-center flex flex-col mt-[130px]">
        <div className="bg-base-200 h-fit">
            <div className="hero-content text-center">
                <div className="max-w-[717px]">
                <h3 className="text-2xl text-[#FF3811] mb-5">Popular Products</h3>
                <h1 className="text-5xl font-bold mb-5">Browse Our Products</h1>
                <p className="py-6 text-[#737373]">
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                </div>
            </div>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
            {/* {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            } */}
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
        <button className="btn text-[#FF3811] mt-[50px] ">More Products</button>
    </div>
    );
};

export default ProductsSection;