import { Link } from "react-router-dom";

import { AuthBanner, InputField, WelcomeMessageWidget } from "@/components";

import registerImg from "../assets/images/register.webp";
import { GoArrowLeft } from "react-icons/go";

import bgImg from "../assets/images/group.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "@/schemas/forgotPasswordSchema";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    mode: "onBlur",
    resolver: zodResolver(forgotPasswordSchema),
  });
  const onSubmit: SubmitHandler<ForgotPasswordFormData> = (data) => {
    // Perform authentication logic here
    console.log("Submitting form:", data);
  };

  return (
    <div className="relative z-50 h-screen">
      <div className="container h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full md:gap-8 lg:gap-32 xl:gap-0">
          {/* left side */}
          <div className="relative flex flex-col justify-center bg-[#131313] text-white">
            <div className="flex flex-col w-full md:w-max md:mx-auto">
              <WelcomeMessageWidget
                title="Forgot password?"
                description="We’ll send you a link to create a new password."
              />

              <form
                className="flex flex-col gap-6 relative z-50"
                onSubmit={handleSubmit(onSubmit)}
              >
                <InputField
                  label="email"
                  type="email"
                  placeholder="Enter your email"
                  register={register("email")}
                  error={errors.email?.message}
                />

                <button
                  disabled={isSubmitting}
                  className="bg-[#ECCBA2] text-black font-medium text-[20px]  flex items-center justify-center h-[58px]"
                >
                  {isSubmitting ? "Processing..." : "Reset Password"}
                </button>

                <Link
                  to="/verification-code"
                  className="font-medium text-[16px] text-white flex items-center gap-2 text-center mx-auto"
                >
                  <GoArrowLeft /> Back to Login
                </Link>
              </form>
            </div>

            <div className="h-[100px] w-full absolute top-0 left-0">
              <img
                src={bgImg}
                alt="bg image"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[100px] w-full absolute bottom-0 left-0">
              <img
                src={bgImg}
                alt="bg image"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* right side */}
          <AuthBanner
            imageSrc={registerImg}
            heading={
              <>
                <span className="text-[#ECCBA2]">no worries!</span>
                <br />
                let's reset it.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
