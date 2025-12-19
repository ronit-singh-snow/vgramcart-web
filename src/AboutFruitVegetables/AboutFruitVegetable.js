import Card from "../Components/Card/Card";
import "./AboutFruitVegetable.css";

export default function AboutFruitVegetable() {
    return (
        <div className="about-fruit-vegetable px-5 py-5">
                <div className="fa-3x">
                    <strong className="green-text-color">Fresh</strong>
                    <span> Fruits & Vegetables</span>
                </div>
                <div className="col-lg-8">
                    ताज़ी सब्ज़ियाँ और रसीले फल अब सीधे आपके दरवाज़े तक — बिलकुल ताज़ा, कुरकुरे और खेत से घर तक की तेजी! स्थानीय स्तर पर खरीदे गए और प्यार से पैक किए गए, हमारे फल-सब्ज़ियों में है स्वाद और सेहत का भरपूर मेल। अभी ऑर्डर करें और रोज़ाना सेहतमंद रहने का सबसे आसान और स्वादिष्ट तरीका अपनाएं!
                </div>
                <div>
                    <Card />
                </div>
        </div>
    )
}