import Image from "next/image";
import React from "react";

interface ServiceType {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <>
      <div className="gradient-card-mask  max-[375px]:!w-full sm:w-full lg:w-[320px] text-[#CAD1E9] !p-5">
        <div className="size-[40px]">
          <Image src={service.icon} alt="" width={100} height={30} />
        </div>
        <h3 className="text-[24px] font-medium mt-2">{service.title}</h3>
        <p className="text-[18px] !font-thin my-3">
          {service.description}
        </p>
        <button className="text-white sora">Explore More ➡</button>
      </div >
    </>
  );
};

export default ServiceCard;
