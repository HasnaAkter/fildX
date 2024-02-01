import bgb from "../../../assets/img_logo_icon/bgb.png";
import lastb from "../../../assets/img_logo_icon/lastb.png";
import ceo from "../../../assets/img_logo_icon/ceso.png";

const AboutPages = () => {
  const bannerStyle = {
    backgroundImage: `url(${bgb})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={bannerStyle} className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1 md:p-10 lg:p-20">
          <img src={lastb} alt="" className="w-full h-auto" />
        </div>
        <div className="col-span-2 md:col-span-1 text-black text-center md:text-left p-10 md:p-36">
          <p className="text-base md:text-lg lg:text-xl text-blue-600">About Us</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-3">A dedicated solution for <br /> startups and enterprises</h2>
          <p className="text-sm md:text-base lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <br />
          <br />
          <hr className="my-6" />
          <div className="flex flex-col md:flex-row items-start p-5 md:p-10">
            <div className="md:mr-10 mb-5 md:mb-0"><img src={ceo} alt="" className="w-32 h-auto" /></div>
            <div>
              <p className="text-sm md:text-base lg:text-lg">"Fieldx is for teams that care about their product growth."</p>
              <p className="font-bold">CEO, FieldX</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutPages;
