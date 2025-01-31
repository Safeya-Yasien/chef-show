import { Link } from "react-router-dom";

import { AuthBanner } from "@/components";

import registerImg from "../assets/images/register.webp";
import { GoArrowLeft } from "react-icons/go";

const ResetPassword = () => {
  return (
    <div className="container relative z-50 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-12 lg:gap-16 ">
        {/* left side */}
        <div className="flex flex-col justify-center bg-[#131313] text-white">
          <h1 className=" font-bold text-xl md:text-[24px] lg:text-[36px] uppercase font-restora mb-2 leading-[30px] md:leading-[35px] lg:leading-[45px]">
            Reset Your Password{" "}
          </h1>
          <p className=" font-normal text-sm md:text-[16px] capitalize">
            For security reasons, this code expires in 2 minutes.{" "}
          </p>

          <div className="border border-[#525252] my-[40px] " />

          <form className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-[10px] ">
              <label className="font-light text-[16px] capitalize ">
                password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <label className="font-light text-[16px] capitalize ">
                confirm password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>

            <button className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px]">
              Reset Password
            </button>

            <Link
              to="/login"
              className="font-medium text-[16px] text-white flex items-center gap-2 text-center mx-auto"
            >
              <GoArrowLeft /> Back to Login
            </Link>
          </form>
        </div>

        {/* right side */}
        <AuthBanner
          imageSrc={registerImg}
          heading={
            <>
              <span className="text-[#C19F74]">create</span>
              <br />a new password
            </>
          }
        />
      </div>
    </div>
  );
};
export default ResetPassword;
