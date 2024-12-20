import Image from "next/image";
import LogoImg from '@/static-files/logo.svg';

const Logo = () => {
  return (
    <div className="h-[97%] relative max-w-[180px] lg:max-w-[220px]">
      <Image src={LogoImg} alt="" width={150} height={30} className=" object-cover " />
    </div>
  );
};

export default Logo;
