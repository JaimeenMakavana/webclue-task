import React from "react";
import ServiceCard from "./ServiceCard";
import Service1 from '@/static-files/service1.svg';
import Service2 from '@/static-files/service2.svg';
import Service3 from '@/static-files/service3.svg';
const SERVICES_DATA = [
  {
    id: 1,
    icon: Service1,
    title: "Personal Information Removal",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    id: 2,
    icon: Service2,
    title: "Cloaking Alias Profiles",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    id: 3,
    icon: Service3,
    title: "Virtual identities Security",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
];

const Service = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
      <button className="gradient-heading-mask">Services</button>
      <h2 className="text-[40px] md:text-[60px] text-center leading-10 my-3">See our services for secure your <span className="heading">Data</span></h2>
      <p className="text-[1.2rem] text-[#CAD1E9] text-center mb-3">
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
