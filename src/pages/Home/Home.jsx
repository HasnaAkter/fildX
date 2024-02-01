import AboutPages from "./HomePages/AboutPages";
import Banner from "./HomePages/Banner";
import Faq from "./HomePages/Faq";
import ProductsFeatures from "./HomePages/ProductsFeatures";
import Services from "./HomePages/Services";
import Teams from "./HomePages/Teams";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <ProductsFeatures></ProductsFeatures>
        <AboutPages></AboutPages>
        <Services></Services>
        <Faq></Faq>
        <Teams></Teams>
        </div>
    );
};

export default Home;