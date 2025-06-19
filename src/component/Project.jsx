

import { useEffect, useRef } from "react";
import { Ecommerce, ecommerce, fresh, hoobank, social, weather } from "../assets";
import 'aos/dist/aos.css';
import Aos from "aos";
import Pro from "./pro";



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

            <div className="w-[100%] m-auto flex items-center justify-around max-ss:justify-center max-ss:w-[85%] flex-wrap gap-10 max-xs:w-[95%] max-xs:gap-2">


                <Pro
                    img={Ecommerce}
                    name={"SH-Ecommerce"}
                    code={"https://github.com/Hussen-shban/SH-e-comerce"}
                    web={"https://hussen-sh.netlify.app/"}
                />
                <Pro
                    img={fresh}
                    name={"FreshoSh"}
                    code={"https://github.com/Hussen-shban/FreshoSh"}
                    web={"https://hussen-shban.github.io/FreshoSh/"}
                />

                <Pro
                    img={weather}
                    name={"weather-APP"}
                    code={"https://github.com/Hussen-shban/weather-APP"}
                    web={"https://hussen-shban.github.io/weather-APP/"}
                />

                <Pro
                    img={hoobank}
                    name={"hoobank"}
                    code={"https://github.com/Hussen-shban/Hoobank"}
                    web={"https://hussen-shban.github.io/Hoobank/"}
                />

                <Pro
                    img={social}
                    name={"SH-social"}
                    code={"https://github.com/Hussen-shban/SH-social"}
                    web={"https://hussen-shban.github.io/SH-social/"}
                />



            </div>
        </section>
    );
}
