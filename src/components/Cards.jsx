import React from "react";
import RetroPCs from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";

const Cards = () => {
  return (
    <div className="w-full px-global mt-12 my-20 flex flex-col sm:grid sm:grid-cols-3 sm:gap-7  font-interRegular">
      <div className="w-full grid grid-cols-3">
        <img src={RetroPCs} alt="retro PCs" className="mb-8 sm:mb-0" />
        <div className="col-span-2 pl-4 flex flex-col items-start justify-start">
          <h1 className="text-grayishBlue text-3xl font-semibold">01</h1>
          <h2 className="text-lg font-interBold cursor-pointer hover:text-softRed">
            Reviving Retro PCs
          </h2>
          <p className="text-darkGrayishBlue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-3">
        <img src={Laptops} alt="laptops" className="mb-8 sm:mb-0" />
        <div className="col-span-2 pl-4 flex flex-col items-start justify-start">
          <h1 className="text-grayishBlue text-3xl font-semibold">02</h1>
          <h2 className="text-lg font-interBold cursor-pointer hover:text-softRed">
            Top 10 Laptops of 2022
          </h2>
          <p className="text-darkGrayishBlue">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-3">
        <img src={Gaming} alt="gaming" className="mb-8 sm:mb-0" />
        <div className="col-span-2 pl-4 flex flex-col items-start justify-start">
          <h1 className="text-grayishBlue text-3xl font-semibold">03</h1>
          <h2 className="text-lg font-interBold cursor-pointer hover:text-softRed">
            The Growth of Gaming
          </h2>
          <p className="text-darkGrayishBlue">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
