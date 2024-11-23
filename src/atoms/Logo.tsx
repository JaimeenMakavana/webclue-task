import Image from "next/image";
import LogoImg from '@/static-files/logo.svg';

const Logo = () => {
  return (
    <div className="h-[97%] relative max-w-[180px]">
      <Image src={LogoImg} alt="" width={100} height={30} className=" object-cover " />
    </div>
  );
};

export default Logo;
