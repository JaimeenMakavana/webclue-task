import Image from "next/image";
import React from "react";

const WhyChooseUsCard = ({ choose }: { choose: any }) => {
  return (
    <div>
      <div>
        <h3>{choose.title}</h3>
        <ul>
          {choose.list.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Image src={choose.img} alt="" width={200} height={200} />
    </div>
  );
};

export default WhyChooseUsCard;
