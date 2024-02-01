import phone from "../../../assets/img_logo_icon/rd.png";
import ic from "../../../assets/img_logo_icon/Group 34037.png";

const ProductsFeatures = () => {
  return (
    <div>
      <div className="bg-white text-center p-5 mt-36">
        <p className="text-xl mt-10">Products Features</p>
        <h1 className="text-3xl font-bold">Make more out of your data</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center md:p-8 lg:p-4 p-5 bg-white">
        <div className="md:col-span-1 lg:col-span-1 p-5 lg:p-10">
          <div className="flex justify-end text-end p-3 md:p-5 lg:mt-20">
            <img src={ic} alt="" />
          </div>
          <div className=" ">
            <h1 className="text-lg md:text-2xl lg:text-2xl font-bold">
              Real-time analytics
            </h1>
            <p className="text-sm md:text-base lg:text-base">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="flex justify-end text-end p-3 md:p-5">
            <img src={ic} alt="" />
          </div>
          <div className="">
            <h1 className="text-lg md:text-2xl lg:text-2xl font-bold">
              Intuitive dashboard
            </h1>
            <p className="text-sm md:text-base lg:text-base">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="flex justify-end text-end p-3 md:p-5">
            <img src={ic} alt="" />
          </div>
          <div className="">
            <h1 className="text-lg md:text-2xl lg:text-2xl font-bold">
              Smart suggestions
            </h1>
            <p className="text-sm md:text-base lg:text-base">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-2 overflow-auto p-5 md:p-10 lg:p-10 text-white">
          <img src={phone} alt="" className="w-full h-auto" />
        </div>

        <div className="lg:col-span-1 rounded-lg p-5 lg:p-10 text-black">
          <div className="mt-20">
            <img src={ic} alt="" />
          </div>
          <div className="">
            <h1 className="text-lg md:text-2xl lg:text-2xl font-bold">
              Multiple views
            </h1>
            <p className="text-sm md:text-base lg:text-base">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="pt-10">
            <img src={ic} alt="" />
          </div>
          <div className="">
            <h1 className="text-lg md:text-2xl lg:text-2xl font-bold">
              AI-led diagnoses
            </h1>
            <p className="text-sm md:text-base lg:text-base">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
          <div className="pt-10">
            <img src={ic} alt="" />
          </div>
          <div className="">
            <h1 className="text-lg md:text-2xl lg:text-2xl font-bold">
              Responsive
            </h1>
            <p className="text-sm md:text-base lg:text-base">
              See product usage, sign-ins, feature metrics change as users work
              on your.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFeatures;
