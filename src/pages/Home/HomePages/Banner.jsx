import table from "../../../assets/img_logo_icon/tablrbanner.png";
import bgb from "../../../assets/img_logo_icon/bgb.png";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bgb})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="p-5 md:p-10" style={bannerStyle}>
      <div className="text-center"  >
        <br />
        <br />
        <br />
        <br />
        <p className="font-semibold text-3xl sm:text-3xl md:text-3xl lg:text-3xl">
          Analytics that transform your
        </p>
        <h3 className="font-semibold text-3xl sm:text-3xl md:text-3xl lg:text-3xl">
          product inside-out
        </h3>
        <button className=" mt-5 text-center rounded-lg p-5 px-4 py-2 text-lg md:px-8 md:text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
        Request for Demo
        </button>
        <button className="mx-2 text-center drop-shadow-xl rounded-lg px-4 py-2 text-lg md:px-8 md:text-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-100 duration-300">
        Download
        </button>
        <br />
        <br />
        <img
          className="object-cover  mx-auto h-auto w-7/12"
          src={table}
          alt="Profile"
        />
      </div>
     
      <hr />
    </div>
  );
};

export default Banner;
