 import image3 from '../../assets/Vector 1 for foter.png'
 import './roadmap.css'
const Roadmap = () => {
    return (
        <section id="roadmap" className='my-10 md:my-28'>
            <div className='roadmap-image space-y-5' style={{
                backgroundImage: `url(${image3})`,
                
            }}>
                <h1 className='text-center mb-8px md:mb-24  font-bold text-xl md:text-[56px] text-white'>
                    Roadmap
                </h1>
                <div className='max-w-[300px] md:max-w-3xl mx-auto'>
                    <p className='text-center text-sm md:text-base font-normal text-[#fff]'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,  exerci tation ullamcorper suscipit lobortis nisl ut aliquip  consequat. Duis   vulputate velit esse molestie  duis dolore te feugait nulla facilisi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;