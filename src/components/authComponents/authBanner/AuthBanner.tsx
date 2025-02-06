import { ReactNode } from "react";
import authIcon from "../../../assets/images/authIcon.svg";

interface IAuthBannerProps {
  imageSrc: string;
  heading: ReactNode;
}

const AuthBanner = ({ imageSrc, heading }: IAuthBannerProps) => {
  return (
    <div className="relative h-full w-full hidden md:block py-10">
      <img
        src={imageSrc}
        alt=""
        loading="lazy"
        className="h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 top-10 bottom-10"></div>

      {/* Text on top */}
      <div className="absolute inset-0 p-[48px]">
        <h2 className="font-restora uppercase text-white text-2xl md:text-[35px] lg:text-[56px] font-normal leading-[40px] md:leading-[50px] lg:leading-[70px]">
          {heading}
        </h2>
      </div>

      {/* auth icon */}
      <img
        src={authIcon}
        alt="Auth Icon"
        className="absolute bottom-4 right-4 w-16 h-16 z-10"
      />
    </div>
  );
};
export default AuthBanner;
