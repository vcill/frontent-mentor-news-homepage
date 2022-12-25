import React from "react";

import BgMobile from "../assets/images/image-web-3-mobile.jpg";
import BgDesktop from "../assets/images/image-web-3-desktop.jpg";

const Future = () => {
  return (
    <div className="w-full px-global  font-interRegular">
      <div className="sm:grid sm:grid-cols-3 sm:grid-rows-5 sm:gap-7">
        <div className="col-span-2 row-span-3">
          <img
            className="object-cover w-full h-full hidden sm:inline"
            src={BgDesktop}
            alt="/"
          />
          <img className="sm:hidden" src={BgMobile} alt="/" />
        </div>
        <div className="order-1 row-span-2 sm:pt-0 py-6">
          <h1 className="text-5xl font-interExtraBold">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="order-2 flex flex-col justify-between items-start sm:row-span-2 text-darkGrayishBlue ">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-softRed text-white text-sm uppercase font-semibold tracking-widest w-[50%] py-4 px-4 hover:bg-veryDarkBlue mt-8">
            Read more
          </button>
        </div>
        <div className="sm:row-span-5 bg-veryDarkBlue text-white p-4 mt-12 sm:mt-0">
          <h2 className="text-softOrange text-3xl font-bold my-3 ">New</h2>
          <div className="border-b border-b-grayishBlue">
            <h3 className="text-lg font-interBold py-4 cursor-pointer hover:text-softOrange">
              Hydrogen VS Electric Cars
            </h3>
            <p className="text-grayishBlue text-sm pb-4">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="border-b border-b-grayishBlue">
            <h3 className="text-lg font-interBold py-4 cursor-pointer hover:text-softOrange">
              The Downsides of AI Artistry
            </h3>
            <p className="text-grayishBlue text-sm pb-4">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div>
            <h3 className="text-lg font-interBold py-4 cursor-pointer hover:text-softOrange">
              Is VC Funding Drying Up?
            </h3>
            <p className="text-grayishBlue text-sm pb-4">
              Private funding by VC firms is down 50% YOY.We take a look at what
              that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
