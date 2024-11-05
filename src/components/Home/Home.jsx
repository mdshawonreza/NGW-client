
import Banner from "./Banner";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
// import WhatIsBluey from "./WhatIsBluey";
import Footer from "./Footer";
// import Buybuley from "./Buybuley";

const Home = () => {
    return (
        <div >

            <Banner></Banner>
            <div className="bg-[#030B18]  " >
                <div className="max-w-[1100px] mx-auto">
                    {/* <WhatIsBluey></WhatIsBluey>
                <Buybuley></Buybuley> */}
                <Tokenomics></Tokenomics>
                    <Roadmap></Roadmap>
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default Home;