import React from "react";
import ServiceCard from "./ServiceCard";

const SERVICES_DATA = [
  {
    id: 1,
    icon: "icon1",
    title: "Personal Information Removal",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    id: 2,
    icon: "icon1",
    title: "Cloaking Alias Profiles",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
  {
    id: 3,
    icon: "icon1",
    title: "Virtual identities Security",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
  },
];

const Service = () => {
  return (
    <div>
      <button>Services</button>
      <h2>See our services for secure your Data</h2>
      <p>
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SERVICES_DATA.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
