import React from "react";
import Image from "next/image";
import { FaPen } from "react-icons/fa";

const BannerImageComp = ({
  banner,
  onEdit,
}: {
  banner: any;
  onEdit: () => void;
}) => {
  return (
    <div
      className="relative p-4 bg-cover bg-center rounded-lg shadow-lg sm:p-6 md:p-8 lg:p-10"
      style={{
        backgroundImage: `linear-gradient(180.00deg, rgba(0, 0, 0, 0.199), rgba(0, 0, 0, 0.0) 100%),url(${banner.background})`,
      }}
    >
      <div className="absolute top-2 right-2">
        <button onClick={onEdit} className="btn btn-ghost  text-xl">
          <FaPen />
        </button>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col  text-white">
          <h2 className="text-xl font-bold mt-2 sm:text-2xl md:text-4xl">
            {banner.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            {banner.description}
          </p>
          <div className="max-w-52 w-full my-auto">
            <button className="btn mt-3 px-4 py-2 text-white rounded w-full">
              {banner.cta}
            </button>
          </div>
        </div>
        <Image
          src={banner.image}
          alt={banner.title}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default BannerImageComp;
