const Map = () => {
  return (
    <div className="mt-[80px]">
      <div className="block md:hidden w-full h-[300px] relative">
        <img
          src="/29.jpg"
          alt="Location"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="hidden md:block texts pt-10 md:pt-[60px] lg:pt-[80px] xl:pt-[100px] 2xl:pt-[130px] pl-10 md:pl-[60px] lg:pl-[80px] xl:pl-[100px] 2xl:pl-[130px] w-full min-h-screen"
        style={{
          background: "url('/29.jpg') no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-[30px] lg:text-[50px] xl:text-[70px] 2xl:text-[90px] font-semibold text-[#22549F] font-inter leading-[120%]">
          Локация
        </h2>

        <p className="text-[20px] xl:text-[25px] 2xl:text-[35px] text-[#22549F] leading-[120%] font-inter font-semibold">
          Республика Дагестан, <br />
          <span className="font-medium">село Гуниб</span>
        </p>
      </div>

      <div className="block md:hidden px-5 py-10 bg-white">
        <h2 className="text-[30px] font-semibold text-[#22549F] font-inter leading-[120%]">
          Локация
        </h2>

        <p className="text-[18px] text-[#22549F] leading-[120%] font-inter font-semibold mt-2">
          Республика Дагестан, <br />
          <span className="font-medium">село Гуниб</span>
        </p>
      </div>
    </div>
  );
};

export default Map;
