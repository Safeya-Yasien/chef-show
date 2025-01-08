import { SectionHeader } from "@/components";
import contact from "../assets/images/contact.jpg";
import group from "../assets/images/group.png";

const Contact = () => {
  return (
    <div className="relative  ">
      {/* hero */}

      <SectionHeader
        title="Contact Us"
        breadcrumbLink="contactus"
        backgroundImage={group}
      />

      {/* form */}
      <div className="px-[20px] md:px-[80px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#C19F74] mt-[80px] ">
          <div className="py-[64px] px-[40px]">
            <h2 className="font-restora text-white font-normal text-[48px] tracking-[0.02em] capitalize mb-[24px]">
              Contact us
            </h2>
            <p className="text-white font-thin text-[20px] leading-[32px] mb-10">
              Hello! Do you have any questions or suggestions about this site,
              or just want to say Hi? Send a message using the below form. I
              will get back to you as soon as possible.
            </p>

            <form className="flex flex-col gap-4">
              {/* Email Field */}
              <div className="flex flex-col">
                <label className="text-white font-thin text-[16px]">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
                  placeholder="Enter Your Email"
                />
              </div>

              {/* Subject Field */}
              <div className="flex flex-col">
                <label className="text-white font-thin text-[16px]">
                  Subject
                </label>
                <input
                  type="text"
                  className="border border-[#C19F74] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none"
                  placeholder="Enter Your Subject"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label className="text-white font-thin text-[16px]">
                  Message
                </label>
                <textarea
                  className="border border-[#C19F74] h-[120px] p-[10px] mt-2 bg-transparent text-white placeholder-gray-400 outline-none resize-none"
                  placeholder="Enter Your Message"
                />
              </div>

              <button className="bg-[#C19F74] text-white w-auto md:w-[256px] h-[52px] flex items-center justify-center uppercase font-medium text-sm tracking-[0.04em] mt-[32px] ">
                send a message
              </button>
            </form>
          </div>

          {/* img */}
          <div className="hidden md:block">
            <img
              src={contact}
              alt="contact"
              loading="lazy"
              className="h-full w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
