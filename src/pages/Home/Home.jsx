import AboutPages from "./HomePages/AboutPages";
import Banner from "./HomePages/Banner";
import ProductsFeatures from "./HomePages/ProductsFeatures";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <ProductsFeatures></ProductsFeatures>
        <AboutPages></AboutPages>
        </div>
    );
};

export default Home;