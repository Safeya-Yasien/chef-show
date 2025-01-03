import { Link } from "react-router-dom";

import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rounded-tr-[140px] rounded-tl-[140px] border-t-[1px] border-t-[#C19F74] bg-black p-[80px] pb-[140px]">
      <div className="flex gap-[80px]">
        {/* first columns */}
        <div className="flex flex-col gap-8">
          <Link to="/">
            <img src="/chefShow.svg" alt="Chef Show" />
          </Link>
          <p className="text-[#8B8B8B] font-normal text-xs w-[380px]">
            the chef show® is a female-driven, Egypt-based fashion brand,
            creating luxurious, empowering apparel for the modern woman.
            Experience elegance, confidence, and the celebration of every
            woman's unique beauty with Gumus® - where luxury meets femininity.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                to="/ "
                className="border-[1px] border-[#8B8B8B] flex items-center justify-center w-[64px] h-[64px] rounded-full"
              >
                <FaFacebookF className="w-[22px] h-[22px]" color="#8B8B8B" />
              </Link>
            </li>
            <li>
              <Link
                to="/ "
                className="border-[1px] border-[#8B8B8B] flex items-center justify-center w-[64px] h-[64px] rounded-full"
              >
                <FaInstagram className="w-[22px] h-[22px]" color="#8B8B8B" />
              </Link>
            </li>
            <li>
              <Link
                to="/ "
                className="border-[1px] border-[#8B8B8B] flex items-center justify-center w-[64px] h-[64px] rounded-full"
              >
                <CiMail className="w-[22px] h-[22px]" color="#8B8B8B" />
              </Link>
            </li>
          </ul>
        </div>

        {/*second  */}
        <div className="font-normal text-[32px] text-white font-restora ">
          Introducing our New Fashion Collection, where contemporary style meets
          timeless elegance.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
