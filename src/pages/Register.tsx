import { Link } from "react-router-dom";

import { AuthBanner, WelcomeMessageWidget } from "@/components";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import registerImg from "../assets/images/register.webp";
import { useState } from "react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="container relative z-50 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-12 lg:gap-16 ">
        {/* left side */}
        <div className="flex flex-col justify-center bg-[#131313] text-white">
          <WelcomeMessageWidget
            title="Join The Chef Show Today!"
            description="Sign up now and enjoy a seamless dining experience!"
          />

          <form className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-[10px] ">
              <label className="font-light text-[16px] capitalize ">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <label className="font-light text-[16px] capitalize ">
                email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>

            <div className="flex flex-col gap-[10px] ">
              <label className="font-light text-[16px] capitalize ">
                Phone number
              </label>
              <input
                type="text"
                placeholder="Enter your Full Phone Number"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
            </div>

            <div className="flex flex-col gap-[10px] relative">
              <label className="font-light text-[16px]">Password</label>
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Enter your Password"
                className="border border-[#C19F74] p-[10px] bg-transparent text-white placeholder-[#6F6F6F] outline-none"
              />
               <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 translate-y-1/2"
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              {showPassword ? (
                                <AiFillEyeInvisible className="text-white" />
                              ) : (
                                <AiFillEye className="text-white" />
                              )}
                            </button>
            </div>

            <button className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px] capitalize">
              sign up
            </button>

            <p className="font-medium text-[16px] text-white mx-auto">
              Already have an account?{" "}
              <Link to="/login" className="text-[#ECCBA2] ">
                Log in
              </Link>
            </p>
          </form>
        </div>

        {/* right side */}
        <AuthBanner
          imageSrc={registerImg}
          heading={
            <>
              <span className="text-[#C19F74]"> sign up</span>
              <br /> and savor the
              <br />
              Experience!
            </>
          }
        />
      </div>
    </div>
  );
};
export default Register;
