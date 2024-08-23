import { motion } from "framer-motion";
import about from '../assets/group-32961.png';
import useMediaQuery from "../hooks/useMediaQuery";
import deco from '../assets/decorate-graphics.svg'

const About = () => {
    const isAboveLarge = useMediaQuery("(min-width: 768px)");

    return (
        <section id="about" className="bg-beige pt-10 pb-24 mb-50 md:mb-50">
            {isAboveLarge ? (
                // Desktop layout
                <>
                    <div className="w-full relative bg-beige flex flex-wrap flex-row items-start justify-around text-left text-[24px] text-gray font-noto-serif">
                        <div className="w-[1440px] h-[669px] flex flex-row items-start justify-start">
                            <div className="w-[546px] relative h-[712px] overflow-hidden shrink-0">
                                <div className="absolute top-[78px] left-[59px] w-[400.1px] h-[600px]">
                                    <img src={about} alt="" />
                                </div>
                            </div>
                            <div className="w-[816px] relative h-[712px] shrink-0">
                                <div className="absolute top-[23px] left-[22px] w-[779.7px] h-[579.3px]">
                                    <img className="absolute top-[11px] left-[0px] w-[46.4px] h-[43px]" alt="" src={deco} />
                                    <div className="absolute top-[0px] left-[58.03px] w-[721.6px] h-[579.3px]">
                                        <div className="absolute top-[478px] left-[0px] bg-lightsteelblue w-[365.7px] h-[101.3px] flex flex-row items-center justify-center py-9 px-[63px] box-border text-white">
                                            <b className="w-[193px] relative leading-[25.5px] inline-block shrink-0">More About Us</b>
                                        </div>
                                        <b className="absolute top-[0px] left-[0px] text-[64px] leading-[63.75px] inline-block font-poppins w-[546.9px] h-[93.3px]">About X House</b>
                                        <div className="absolute top-[169px] left-[0px] text-[21px] leading-[29.75px] font-averia inline-block w-[721.6px] h-[280px]">
                                            <p className="m-0">This is a dynamic hub for forward-thinking minds in data science and machine learning, dedicated to creating a more inclusive and diverse future.</p>
                                            <p className="m-0">&nbsp;</p>
                                            <p className="m-0">We are committed to bridging the gap between society and technology, harnessing the art of data science to craft transformative solutions that drive business success and uplift communities—especially women, neurodiverse individuals, and minorities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="w-[4.8px] relative bg-gray h-[1440px] [transform:_rotate(89.9deg)] " /> */}
                    </div>

                    {/* Four blocks in one row */}
                    <div className="w-full overflow-x-auto mt-28">
                        <div className="flex justify-center min-w-max px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                            {/* Blog */}
                            <motion.div
                                className="w-[270.7px] mx-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <div className="bg-tomato h-[251px] mb-4"></div>
                                <b className="text-4xl leading-tight text-gray font-poppins block">Blog</b>
                            </motion.div>

                            {/* Projects */}
                            <motion.div
                                className="w-[270.7px] mx-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <div className="bg-lightsteelblue h-[251px] mb-4"></div>
                                <b className="text-4xl leading-tight text-gray font-poppins block">Projects</b>
                            </motion.div>

                            {/* Learn */}
                            <motion.div
                                className="w-[270.7px] mx-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <div className="bg-darkorange-100 h-[251px] mb-4"></div>
                                <b className="text-4xl leading-tight text-gray font-poppins block">Learn</b>
                            </motion.div>

                            {/* Contact */}
                            <motion.div
                                className="w-[270.7px] mx-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <div className="bg-grey h-[251px] mb-4"></div>
                                <b className="text-4xl leading-tight text-gray font-poppins block">Contact</b>
                            </motion.div>
                        </div>
                    </div>
                </>
            ) : (
                // Mobile layout (unchanged)
                <div className="relative w-full flex flex-col items-center justify-around py-[57px] px-5 sm:px-6 box-border text-left text-[21px] text-gray font-averia bg-beige">
            
                <div className="relative w-full overflow-hidden flex flex-col items-start justify-around py-[27px] px- box-border text-left text-[21px] text-gray font-averia">
                    <div className="w-full max-w-md mx-auto">
                        <div className="relative">
                        <b className="text-[40px] sm:text-5xl leading-tight font-poppins block mb-8">About X House</b>
                        <div className="leading-[29.75px] mb-8">
                            <p className="m-0">X House, a dynamic hub for forward-thinking individuals in data science and machine learning, dedicated to creating a more inclusive and diverse future.</p>
                            <p className="m-0">&nbsp;</p>
                            <p className="m-0">We are committed to bridging the gap between society and technology, harnessing the art of data science to craft transformative solutions that drive business success and uplift communities—especially women, neurodiverse individuals, and minorities.</p>
                        </div>
                        <div className="bg-lightsteelblue w-full max-w-[263px] h-[85px] flex items-center justify-center py-4 px-6 text-[24px] text-white font-noto-serif mb-12">
                            <b className="leading-[25.5px] cursor-pointer">More About Us</b>
                        </div>
                    </div>
                        
                <div className="flex flex-col items-center justify-start gap-10 text-3xl sm:text-4xl font-poppins py-32">
                    <div className="w-full max-w-[270.7px] relative h-[362px]">
                        <div className="absolute top-[111px] left-0 right-0 bg-tomato h-[251px]" />
                        <b className="absolute top-0 left-0 leading-tight">Blog</b>
                    </div>
                    <div className="w-full max-w-[270.7px] relative h-[362px]">
                        <div className="absolute top-[111px] left-0 right-0 bg-lightsteelblue h-[251px]" />
                        <b className="absolute top-0 left-0 leading-tight">Projects</b>
                    </div>
                    <div className="w-full max-w-[270.7px] relative h-[362px]">
                        <div className="absolute top-[111px] left-0 right-0 bg-darkorange-200 h-[251px]" />
                        <b className="absolute top-0 left-0 leading-tight">Learn</b>
                    </div>
                    <div className="w-full max-w-[270.7px] relative h-[362px]">
                        <div className="absolute top-[111px] left-0 right-0 bg-ivory h-[251px]" />
                        <b className="absolute top-0 left-0 leading-tight">Contact</b>
                    </div>
                </div>
                        <div className="self-stretch relative h-[268.7px]">
                            <div className="absolute top-[0px] left-[50px] w-[192.9px] h-[267px]">
                                <div className="absolute top-[65.83px] left-[39.19px] bg-gray border-gray border-[4px] border-solid box-border w-[42.3px] h-[204.9px]" />
                                <div className="absolute top-[0px] left-[78.08px] bg-gainsboro border-gray border-[4px] border-solid box-border w-[42.3px] h-[270.9px]" />
                                <div className="absolute top-[201.16px] left-[0px] bg-lightsteelblue border-gray border-[4px] border-solid box-border w-[42.4px] h-[69.8px]" />
                                <div className="absolute top-[0px] left-[116.46px] bg-cornflowerblue border-gray border-[4px] border-solid box-border w-[42.4px] h-[270.9px]" />
                                <div className="absolute top-[28.62px] left-[154.65px] bg-darkorange-100 border-gray border-[4px] border-solid box-border w-[42.3px] h-[242.3px]" />
                            </div>
                            {/* <div className="absolute top-[264.99px] left-[619.99px] bg-gray w-0.5 h-[620px] [transform:_rotate(89.8deg)] [transform-origin:0_0]" /> */}
                        </div>
                    </div>
                </div>
                </div>
            )}

        </section>
    );
};

export default About;


