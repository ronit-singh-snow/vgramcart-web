import React from 'react';
import './LandingPage.css';
import Contact from "../Contact/Contact";
import OurProduct from "../OurProduct/OurProduct";
import KeyFeatures from "../KeyFeatures/Keyfeatures";
import Footer from "../Footer/Footer";

function LandingPage() {
    return (
        <div >
            <main className="main-content">
                <div className='app-banner'>
                    <div className='app-description'>
                        Online ordering is currently available from the app. Click on the below link to download the app.
                    </div>
                    <div className="app-link">
                        <a href="https://play.google.com/store/search?q=blinkit&c=apps&hl=en">
                            <img src="https://cloud.appwrite.io/v1/storage/buckets/6723636300050d7a50f2/files/676d678d002e234b1e18/view?project=66efac960005a73d7247&project=66efac960005a73d7247&mode=admin" className='play-icon'/>
                            <span className='download-text'>Download Android App</span>
                        </a>
                        
                    </div>
                </div>
            </main>
            <OurProduct />
            <KeyFeatures />
            <Footer />
        </div>
    );
}

export default LandingPage;
