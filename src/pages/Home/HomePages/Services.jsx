import bgb from "../../../assets/img_logo_icon/bgb.png";
import tv from "../../../assets/img_logo_icon/smart-tv.png";
import MultiUser from "../../../assets/img_logo_icon/multipole.png";
import trophy from "../../../assets/img_logo_icon/trophy.png";
import user from "../../../assets/img_logo_icon/user.png";
import ServiceCard from "../../../component/SeviceCard";

const Services = () => {
  const bannerStyle = {
    backgroundImage: `url(${bgb})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center md:p-8 lg:p-4 p-5"
      style={bannerStyle}
    >
      <ServiceCard image={tv} title="10+" description="Platforms Created" />

      <ServiceCard image={MultiUser} title="1559+" description="Total Users" />

      <ServiceCard image={user} title="10+" description="Total Clients" />

      <ServiceCard
        image={trophy}
        title="300 Days"
        description="In Operations"
      />
    </div>
  );
};

export default Services;
