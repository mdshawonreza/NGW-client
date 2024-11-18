
import Banner from "./Banner";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import WhatIsBluey from "./WhatIsBluey";
import Footer from "./Footer";
import Buybuley from "./Buybuley";
import banner from "../../assets/landing page 2-01.jpg"
// import image6 from '../../assets/bg light.png'
import './banner.css'
// import './whatisbluey.css'

const Home = () => {
    return (
        <div >

            <div className=" bg-banner " style={{ backgroundImage: `url(${banner})` }}>
                <Banner></Banner>
            </div>
            <div className="bg-[#030B18]  " >
                <div className=" mx-auto">
                    <div className="   bg-light"
                    //  style={{ backgroundImage: `url(${image6})`, }}
                     >
                        <WhatIsBluey></WhatIsBluey>
                    </div>

                    <Buybuley></Buybuley>
                    <Tokenomics></Tokenomics>
                    <Roadmap></Roadmap>
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default Home;