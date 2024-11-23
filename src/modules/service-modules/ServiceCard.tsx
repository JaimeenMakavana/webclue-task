import React from "react";

const ServiceCard = ({ service }: { service: any }) => {
  return (
    <div className="p-3">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button>Learn more</button>
    </div>
  );
};

export default ServiceCard;
