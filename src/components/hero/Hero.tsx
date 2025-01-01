import hero from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center rounded-br-[120px] rounded-bl-[120px] h-screen
      flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* overlay */}

      <div className="absolute w-full h-full top-0 left-0 bg-[#000000BF] "></div>
      <div className="flex flex-col items-center justify-center gap-[40px] w-[700px] relative">
        <h1 className="text-white font-normal font-restora text-[72px] uppercase text-center">
          delicious food eating experience
        </h1>
        <p className="text-white leading-[0.04em] text-[20px] font-normal ">
          we serve food, Harmony, & Laughter Since 1991
        </p>
        <button className="text-white border-[2px] border-[#C19F74] uppercase text-sm font-medium leading-[0.04em] w-[150px] h-[50px] flex items-center justify-center">
          RESERVATION
        </button>
      </div>
    </div>
  );
};

export default Hero;
