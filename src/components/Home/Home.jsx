
import Banner from "./Banner";

import Inventory from "./Inventory";
import PartneredBrands from "./PartneredBrands";
import PdfViewer from "./PdfViewer";
import StoryService from "./StoryService";
import Testimonial from "./Testimonial";

import './banner.css'


const Home = () => {
    return (
        <div >

            <div className=" bg-banner " 
           
            >
                <Banner></Banner>
            </div>
            <StoryService></StoryService>
            <PartneredBrands></PartneredBrands>
            <Inventory></Inventory>
            <Testimonial></Testimonial>
            <PdfViewer></PdfViewer>
            
           

        </div>
    );
};

export default Home;