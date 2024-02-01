import img1 from "../../../assets/img_logo_icon/Aven.png";
import img2 from "../../../assets/img_logo_icon/Amara.png";
import img3 from "../../../assets/img_logo_icon/Circle.png";
import img4 from "../../../assets/img_logo_icon/Kyan.png";
import img5 from "../../../assets/img_logo_icon/Treva.png";

const Teams = () => {
  const images = [img1, img2, img3, img4, img5];

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "1rem",
    textAlign: "center",
  };

  const gridItemStyle = {
    width: "100%",
    borderRadius: "0.375rem",
    overflow: "hidden",
    padding: "1rem",
  };

  return (
    <div>
      <br />
      <br />
      <p className="text-blue-500 text-center p-4 ">
        5,000+ high-impact teams rely on Fieldx
      </p>
      <div style={gridContainerStyle}>
        {images.map((imageUrl, index) => (
          <div key={index} style={gridItemStyle}>
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Teams;
