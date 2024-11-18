
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
// import { RiWechat2Fill } from "react-icons/ri";
import icon3 from "../../assets/dexscreener.png"
import './banner.css'


const Banner = () => {
    return (
        <section id="home"  >
            <div className="max-w-[500px] lg:max-w-[1100px] mx-auto flex items-center  min-h-[65vh]  md:min-h-[120vh]">
                <div className="ml-10 md:ml-[70px] mt-10 md:mt-0   ">

                    <div className="max-w-[250px] md:max-w-[653px]  mx-auto">
                        <h1 className="text-[22px] leading-6 md:leading-[66px] rubik-font  text-white md:text-[57px] font-normal">Welcome to Bluey <br />The Future of Meme <br /> Coins!</h1>

                        <div className="max-w-[200px] pl-0 md:pl-1 md:max-w-[520px] mt-1 md:mt-2 mb-2 md:mb-6  ">
                            <p className="text-base md:text-sm poppins-font font-normal text-[#fff] leading-5 md:leading-5">
                                Just a time traveller finding his true self.
                            </p>
                        </div>
                        <div className="flex  items-center gap-1 md:gap-8">
                           <a href="https://raydium.io/swap/?inputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&outputMint=BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump">
                           <button className="w-[101px] md:w-[161px] h-[32px] md:h-[61px] bg-[#fff] rounded-2xl text-sm md:text-base rubik-font font-semibold text-[#003084] banner-buy-button banner-stroke-button">Buy Turbo</button>
                           </a>
                            <div className="space-x-1 flex justify-center items-center md:space-x-7">


                                <a href="https://t.me/BlueyValley">
                                    <button className=" btn btn-sm md:btn-md  btn-circle  border-[1px] md:border-[2px] border-black">
                                        <FaTelegramPlane className="text-sm md:text-xl font-bold banner-rounded-button text-[#0f2c69]"></FaTelegramPlane>
                                    </button>
                                </a>
                                <a href="https://x.com/itsblueyonsol">
                                    <button className="btn btn-sm md:btn-md  btn-circle border-[1px] md:border-[2px] border-black">
                                        <FaTwitter className="text-sm md:text-xl font-bold text-[#0f2c69]"></FaTwitter>
                                    </button>
                                </a>
                                <a href="https://dexscreener.com/solana/BXg6mQqRvUZMcjzA2PsjxNi8wFCTrsV9FeHb5yeBpump?1731933193225">
                                    <button className="btn btn-sm md:btn-md  btn-circle border-[1px] md:border-[2px] border-black">
                                        {/* <RiWechat2Fill className="text-sm md:text-xl text-[#0f2c69] font-bold"></RiWechat2Fill> */}
                                        <img className='h-[15px] md:h-[25px]  w-[15px] md:w-[25px]  bg-black rounded-full p-0 md:p-1' src={icon3} alt="" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Banner;