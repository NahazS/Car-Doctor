import React from "react";

const ProductCard = () => {
  return (
    <div className="card bg-base-100 max-w-[364px] max-h-[389px] shadow-xl">
      <figure className="mx-[19px] mt-[25px] max-w-[326px] max-h-[215px] bg-[#F3F3F3] rounded-xl">
        <img
          src="/assets/images/products/1.png"
          alt="Shoes"
          className="w-[156px] "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
