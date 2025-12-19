
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import ProductFeatures from './AboutProducts';
import Products from './Products';
import OurServices from './OurServices';
function Homepage() {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <ProductFeatures />
            <Products />
            <OurServices />
            <Footer />
        </div>
    );
}

export default Homepage;