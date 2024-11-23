import React from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES_DATA } from "@/lib/StaticData";

const Service = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
      <button className="gradient-heading-mask">Services</button>
      <h2 className="text-[40px] md:text-[60px] text-center leading-10 my-3 md:leading-tight max-w-2xl">See our services for secure your <span className="heading">Data</span></h2>
      <p className="text-[1.2rem] text-[#CAD1E9] text-center mb-3 max-w-2xl">
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-3">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
