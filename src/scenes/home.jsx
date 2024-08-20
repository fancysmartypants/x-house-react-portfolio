import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import XH from '../assets/frame-4.png';

const Home = ({ setSelectedPage }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isDesktop ? <DesktopHome /> : <MobileHome />;
};

const DesktopHome = () => {
    return (
        <div className="top-20 w-full relative bg-beige h-[1036px] flex flex-row items-start justify-evenly top-10 p-[100px] box-border gap-[141px] text-left text-[64px] text-gray font-poppins">
            <motion.div 
                className="w-[630px] flex flex-col items-start justify-start"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                        <b className="self-stretch relative tracking-[-0.02em] leading-[120%] flex items-center h-[373px] shrink-0">Women and Neurodiverse in Data Science</b>
                        <div className="w-[502px] relative text-[32px] leading-[38.25px] font-averia inline-block h-[172px] shrink-0">Where Data Science, Innovation, and Inclusivity Converge</div>
                    </div>
                </div>
                <div className="w-[359px]  flex flex-col items-start justify-start py-[11px] px-0 box-border gap-2.5 text-5xl text-white font-noto">
                    <motion.div 
                        className="cursor-pointer w-[359px] rounded-81xl bg-yellow border-white border-[2px] border-solid box-border h-[101.3px] flex flex-row items-center justify-center py-9 px-[63px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <b className="relative leading-[25.5px]">Join US</b>
                    </motion.div>
                    <motion.div 
                        className="cursor-pointer w-[359px] rounded-81xl bg-white h-[101.3px] flex flex-row items-center justify-center py-9 px-[63px] box-border text-yellow"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        onClick={() => window.open("https://learn.houseofx.co", "_blank")}
                    >
                        <b className="relative leading-[25.5px]">Learning Center</b>
                    </motion.div>
                </div>
            </motion.div>
            <motion.img 
                className="w-auto relative h-[906px] hover:filter hover:saturate-200 transition duration-100" 
                alt="" 
                src={XH} 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
};

const MobileHome = () => {
    return (
        <div className="top-20 w-full relative bg-beige min-h-screen flex flex-col items-start justify-start py-[100px] px-[60px] box-border text-center text-[40px] text-gray font-poppins">
            <motion.div 
                className="w-full flex flex-col items-start justify-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <b className="w-full relative tracking-[-0.02em] leading-[120%] text-left mb-6 ">Women and Neurodiverse in Data Science</b>
                <div className="w-0.7 relative text-[24px] leading-[32px] font-averia text-left mb-8">Where Data Science, Innovation, and Inclusivity Converge</div>
                <motion.div 
                    className="cursor-pointer w-full max-w-[250px] rounded-81xl bg-yellow border-white border-[2px] border-solid box-border h-[80px] flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <b className="font-averia text-white text-[24px] leading-[25.5px]">Join US</b>
                </motion.div>
                <motion.div 
                    className="cursor-pointer w-full max-w-[250px] rounded-81xl bg-white h-[80px] flex items-center justify-center text-yellow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => window.open("https://learn.houseofx.co", "_blank")}
                    
                >
                    <b className="font-averia text-[24px] leading-[25.5px]">Learning Center</b>
                </motion.div>
            </motion.div>
            <motion.img 
                className="w-full max-w-[400px] mt-8 hover:filter hover:saturate-200 transition duration-100" 
                alt="" 
                src={XH} 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            />
        </div>
    );
};

export default Home;


// const Home = () => {
//     const [isDesktop, setIsDesktop] = useState
//     return (
//         <div className="w-full relative bg-beige h-[1036px] flex flex-row items-start justify-evenly top-10 p-[100px] box-border gap-[141px] text-left text-[64px] text-gray font-poppins">
//             <div className="w-[630px] flex flex-col items-start justify-start">
//                 <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
//                     <div className="self-stretch flex flex-col items-start justify-start">
//                         <b className="self-stretch relative tracking-[-0.02em] leading-[120%] flex items-center h-[373px] shrink-0">Women and Neurodiverse in Data Science</b>
//                         <div className="w-[502px] relative text-[32px] leading-[38.25px] font-averia inline-block h-[172px] shrink-0">Where Data Science, Innovation, and Inclusivity Converge</div>
//                     </div>
//                 </div>
//                 <div className="w-[339px] overflow-hidden flex flex-col items-start justify-start py-[11px] px-0 box-border gap-2.5 text-5xl text-white font-noto">
//                     <div className="w-[339px] rounded-81xl bg-yellow border-white border-[2px] border-solid box-border h-[101.3px] flex flex-row items-center justify-center py-9 px-[63px]">
//                         <b className="relative leading-[25.5px]">Join US</b>
//                     </div>
//                     <div className="w-[339px] rounded-81xl bg-white h-[101.3px] flex flex-row items-center justify-center py-9 px-[63px] box-border text-yellow">
//                         <b className="relative leading-[25.5px]">Learning Center</b>
//                     </div>
//                 </div>
//             </div>
//             <img className="w-auto relative h-[906px]" alt="" src={XH} />
//         </div>
//     );
// };



