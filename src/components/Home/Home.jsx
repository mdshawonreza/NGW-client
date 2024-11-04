
import Banner from "./Banner";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import WhatIsBluey from "./WhatIsBluey";
import Footer from "./Footer";
import Buybuley from "./Buybuley";

const Home = () => {
    return (
        <div >
            
            <Banner></Banner>
            <div className="bg-[#010637fa] " >
                <WhatIsBluey></WhatIsBluey>
                <Buybuley></Buybuley>
                <Tokenomics></Tokenomics>
                <Roadmap></Roadmap>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;