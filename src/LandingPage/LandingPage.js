import React, { useState, useEffect } from 'react'; 


import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import OurProduct from "../OurProduct/OurProduct";
import KeyFeatures from "../KeyFeatures/Keyfeatures";
import Footer from "../Footer/Footer";
import NavbarHeader from '../Utils/Navbar';

import DeliveryGirl from "./delivery_girl.png";
import FruitsBasket from "./fruits_basket.png";

import ButtonWithShadow from '../Components/ButtonWithShadow/ButtonWithShadow';
import AboutFruitVegetable from '../AboutFruitVegetables/AboutFruitVegetable';
import { post } from '../Utils/Utils';

function LandingPage() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div >
            <div className="nv-main-content">
                <NavbarHeader />
                <hr />
                <div fluid className='mx-5 landing-main'>
                    <div className='col-lg-6'>
                        <span className='moto-text'>Get <strong style={{color: "#19BC4A"}}>freshness</strong> delivered to your doorstep!!</span>
                        <div className='left-side-images'>
                            <img src={DeliveryGirl} className='drop-shadow' width="55%" />
                            <div className='moto-text text-center'>
                                <div className="free-delivery">
                                    <strong className='green-text-color'>Free</strong>
                                </div>
                                <div className="free-delivery">Delivery</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-lg-6 right-side-container'>
                        <img src={FruitsBasket} width="100%"  className='drop-shadow' />
                        <ButtonWithShadow />
                    </div>
                </div>
            </div>
            <AboutFruitVegetable />
            <OurProduct />
            <KeyFeatures />
            <Footer />
        </div>
    );
}

export default LandingPage;
