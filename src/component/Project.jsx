

import { useEffect, useRef } from "react";
import { ecommerce, hoobank, social } from "../assets";
import 'aos/dist/aos.css';
import Aos from "aos";


export default function Project() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
        });
    }, []);

    return (
        <section className="max-xs:pb-2 pb-7 pt-40 max-xs:pt-20" id="Project">
            <h1 className="sub-title   mb-20 max-xs:text-[32px] max-xs:mb-8">

            <span className="bg-gradient-to-b
                     from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
                    text-transparent bg-clip-text"> Featured </span>
                 
                Product

            </h1>

            <div className="w-[85%] m-auto flex items-center justify-center flex-wrap gap-10 max-xs:w-[95%] max-xs:gap-2">
                <div
                    data-aos="fade-up"
                    className=" w-[510px] h-[450px] flex flex-col justify-center items-center max-xs:w-[100vw] max-xs:h-[300px]"
                >
                    <div className="bg-dimWhite  w-[500px] h-[400px] rounded-[50px] shadow-[rgba(0,0,0,0.3)] shadow-2xl flex items-center justify-center max-xs:w-[100%] max-xs:h-[200px]">
                        <div className="w-[450px] rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.2)] shadow-2xl max-xs:w-[95%]">
                            <img src={hoobank} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full pt-7 px-2">
                        <p className="font-poppins font-semibold text-[20px] max-xs:text-[18px] bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)] text-transparent bg-clip-text">
                            Hoobank
                        </p>
                        <div className="flex items-center gap-1">
                            <a
                                className="font-poppins flex items-center justify-center text-gray-600 bg-dimWhite px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                                href="https://github.com/Hussen-shban/Hoobank"
                            >
                                Code
                            </a>
                            <a
                                className="font-poppins flex items-center justify-center text-gray-600 bg-dimWhite px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                                href="https://hussen-shban.github.io/Hoobank/"
                            >
                                Wep
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="fade-up"

                    className=" w-[510px] h-[450px] flex flex-col justify-center items-center max-xs:w-[100vw] max-xs:h-[300px]"
                >
                    <div className="bg-dimWhite w-[500px] h-[400px] rounded-[50px] shadow-[rgba(0,0,0,0.3)] shadow-2xl flex items-center justify-center max-xs:w-[100%] max-xs:h-[250px]">
                        <div className="w-[450px] rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.2)] shadow-2xl max-xs:w-[95%]">
                            <img src={ecommerce} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full pt-7 px-2">
                        <p className="font-poppins font-semibold text-[20px] max-xs:text-[18px] bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)] text-transparent bg-clip-text">
                            SH E-commerce
                        </p>
                        <div className="flex items-center gap-1">
                            <a
                                className="font-poppins flex items-center justify-center text-gray-600 bg-dimWhite px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                                href="https://github.com/Hussen-shban/E-commerce"
                            >
                                Code
                            </a>
                            <a
                                className="font-poppins flex items-center justify-center text-gray-600 bg-dimWhite px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                                href="https://hussen-shban.github.io/E-commerce/"
                            >
                                Wep
                            </a>
                        </div>
                    </div>
                </div>

                <div


data-aos="fade-up"
 
                    // data-aos="fade-up"

                    className="  w-[510px] h-[450px] flex flex-col justify-center items-center max-xs:w-[100vw] max-xs:h-[300px]"
                >
                    <div className="bg-dimWhite w-[500px] h-[400px] rounded-[50px] shadow-[rgba(0,0,0,0.3)] shadow-2xl flex items-center justify-center max-xs:w-[100%] max-xs:h-[200px]">
                        <div className="w-[450px] rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.2)] shadow-2xl max-xs:w-[95%]">
                            <img src={social} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full pt-7 px-2">
                        <p className="font-poppins font-semibold text-[20px] max-xs:text-[18px] bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)] text-transparent bg-clip-text">
                            SH-social
                        </p>
                        <div className="flex items-center gap-1">
                            <a
                                className="font-poppins flex items-center justify-center text-gray-600 bg-dimWhite px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                                href="https://github.com/Hussen-shban/SH-social"
                            >
                                Code
                            </a>
                            <a
                                className="font-poppins flex items-center justify-center text-gray-600 bg-dimWhite px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                                href="https://hussen-shban.github.io/SH-social/"
                            >
                                Wep
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
