import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PdfViewer = () => {
    // const handleDownload = () => {
    //     window.open("", "_blank");
    //   };
   

  // Example PDF URL - replace with your actual PDF URL
  const pdfUrl = ()=>{ window.open("https://drive.google.com/file/d/1KCFokZ6VYIheD1TYUyd5DqgFBuVCVLpF/view?usp=drivesdk")} 
  

  
    
   
    return (


        <div>
            <div className="bg-[#1571B4] py-9 md:py-14 border-b-8 border-[#F26B24] ">
                <div className=" max-w-[380px] md:max-w-2xl lg:max-w-5xl  mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 inter-font">
                    <div>
                        <h2 className="text-xl md:text-3xl text-white font-bold  max-w-5xl mx-auto">
                            VIEW PRODUCT LIST FOR 2025
                        </h2>

                    </div>
                    <div className="">


                       {/* <Link to={pdfUrl}> */}
                            <button onClick={pdfUrl}  className='h-[35px] md:h-[45px] lg:h-[60px] md:w-[150px] w-[120px] lg:w-[200px] inter-font rounded-full hover:bg-[#F26B24] text-white hover:text-white text-xs md:text-lg lg:text-[26px] font-medium  flex justify-center items-center gap-1 md:gap-3 border-[1px] md:border-[3px]  border-[#F26B24] hover:border-[#F26B24]  '>
                                {/* <BsTelephoneInbound className='text-xm md:text-[24px] font-medium' /> */}
                                VIEW

                            </button>
                        {/* </Link> */}


                        
        




                    </div>
                </div>




            </div>
        </div>
    );
};

export default PdfViewer;