import React, { useState, useEffect } from 'react'; 

// import React from 'react';
import './LandingPage.css';
import Contact from "../Contact/Contact";
import OurProduct from "../OurProduct/OurProduct";
import KeyFeatures from "../KeyFeatures/Keyfeatures";
import Footer from "../Footer/Footer";

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
            <main className="main-content">
            {show && (
                <div className='app-banner'>
                    <div className='app-description'>
                        Online ordering is currently available from the app. Click on the below link to download the app.
                    </div>
                    <div className="app-link">
                        <a href="https://play.google.com/store/apps/details?id=com.vgram.cart&pcampaignid=web_share" target="_blank">
                            <img src="https://cloud.appwrite.io/v1/storage/buckets/6723636300050d7a50f2/files/676d678d002e234b1e18/view?project=66efac960005a73d7247&project=66efac960005a73d7247&mode=admin" className='play-icon' alt='landing page'/>
                            <span className='download-text'>Download Android App</span>
                        </a>
                        
                    </div>
                </div>
                )}
            </main>
            <OurProduct />
            <KeyFeatures />
            <Footer />
        </div>
    );
}

export default LandingPage;
