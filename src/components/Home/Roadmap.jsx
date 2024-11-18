import image3 from '../../assets/Vector 1 for foter.png'
import './roadmap.css'
const Roadmap = () => {
    return (
        <section id="roadmap" className='py-10 md:py-[82px]  max-w-[1022px] mx-auto'>
            <div className='roadmap-image ' style={{
                // backgroundImage: `url(${image3})`,

            }}>
                <h1 className='text-center mb-4 md:mb-8  font-normal text-xl md:text-[57px] rubik-font text-white '>
                    Roadmap
                </h1>
                <img src={image3} alt="" />
                <div className='max-w-[300px] md:max-w-[680px] mx-auto '>
                    <div className='text-center text-sm  md:text-base font-normal text-[#fff] poppins-font -mt-10 md:-mt-28'>
                       <h4 className='text-xl font-semibold'>  Phase 1: The Awakening </h4> 
                       <p className='mt-2 md:mt-1'>
                       Deploy $BLUEY on Solana with smart contract audits. <br />
                       Launch community channels and build hype for the token presale.
                       </p>
                         
                        <h4 className='text-xl font-semibold mt-4 md:mt-3'>Phase 2: Exploring Timelines</h4> 
                       <p className='mt-2 md:mt-1'>
                       Introduce staking and basic utility features. <br />
                        Launch exclusive BLUEY NFTs representing its time-travel journey. <br />
                        Collaborate with Solana-based projects for visibility. </p>
                       <h4 className='text-xl font-semibold mt-4 md:mt-3'>
                       Phase 3: The Present
                       </h4>
                       <p className='mt-2 md:mt-1'>
                       Secure listings on Solana DEXs and CEXs. <br />
                        Develop a gamified experience around BLUEY’s adventures. <br />
                        Run community-driven events to deepen engagement.
                       </p>
                       <h4 className='text-xl font-semibold mt-4 md:mt-3'>  Phase 4: Finding True Self</h4>
                      
                       <p className='mt-2 md:mt-1'>
                       Expand $BLUEY’s reach via cross-chain compatibility. <br />
                        Launch BLUEY DAO for community-led initiatives. <br />
                        Explore integration into Solana-based metaverse projects.
                       </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;