const ServiceCard = ({ image, title, description }) => {
    return (
        <div className="md:col-span-1 lg:col-span-1 p-5 lg:p-10">
            <div className="flex justify-center text-center p-3 md:p-5 lg:mt-20">
                <img src={image} alt="" className="h-7" />
            </div>
            <div className="text-center">
                <h1 className="text-lg md:text-2xl lg:text-2xl font-bold text-blue-600">{title}</h1>
                <p className="text-sm md:text-base lg:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};
export default ServiceCard;