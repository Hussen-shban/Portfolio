import { useEffect, useRef } from "react";
import { front, husse, safita } from "../assets";
import Button from "./button";
import gsap from "gsap";




export default function Hero() {



    const heroref = useRef(null)

    useEffect(() => {
        gsap.fromTo(heroref.current,
            { y: 200, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1.2, ease: "power1.out",  }  
        );
    }, []);


    return (
        <section ref={heroref} className="pt-20 -z-0 max-xs:pt-16 max-xs:px-5  max-xs:h-[100%] flex items-center justify-center  " id="Home" >
            <div className="flex items-center  flex-col " >

                <div className=" flex items-center justify-center
             flex-col roboto text-[70px] font-normal max-xs:text-[40px]
             max-xs:justify-start
             " >

                    <div className="flex justify-center max-xs:justify-center
                         items-center  gap-5  ">
                        <p className="flex justify-center 
                          items-center  gap-2 " >
                            <span className="">I'm</span>
                            <span className="bg-gradient-to-b
                     from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
                    text-transparent bg-clip-text"> Hussen</span>
                        </p>


                        <div className=" shadow-[rgba(0,0,0,0.5)] shadow-lg border-[3px]
                 border-primary w-[100px] h-[108px] max-xs:w-[30%] max-xs:h-[100%]
                  overflow-hidden rounded-full
                   bg-slate-600" >
                            <img
                                src={husse} alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>


                    <p className="flex justify-center 
                                  items-center flex-row gap-5
                                  max-sm:flex-wrap  max-sm:mt-5
                                   max-xs:hidden

                                  ">
                        <span>front-end</span>
                        <div className=" shadow-[rgba(0,0,0,0.5)] 
                                           shadow-lg border-[3px] border-black
                                            w-[140px]   overflow-hidden
                                            rounded-full bg-slate-600
                                           
                                            " >
                            <img
                                src={front} alt=""
                                className="w-full h-full object-cover "
                            />
                        </div>

                        <span className="bg-gradient-to-b
                     from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
                    text-transparent bg-clip-text"> developer</span>
                    </p>

                    <p className="flex justify-start 
                                  items-center flex-row gap-5
                                  max-sm:flex-wrap  max-sm:mt-5
                                  max-xs:justify-center max-xs:flex-col xs:hidden

                                  ">

                        <div className="flex flex-col">
                            <span>front-end </span>
                            <span className="bg-gradient-to-b
                     from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
                    text-transparent bg-clip-text"> developer</span>

                        </div>
                        <div className=" shadow-[rgba(0,0,0,0.5)] 
                                           shadow-lg border-[3px] border-black
                                             overflow-hidden
                                            rounded-full bg-slate-600 max-xs:w-[40%] 
                                           
                                            " >
                            <img
                                src={front} alt=""
                                className="w-full h-full object-cover "
                            />
                        </div>


                    </p>


                    <div className="flex justify-center 
                                items-center  gap-5 
                                max-sm:flex-wrap  max-sm:mt-5
                                max-xs:hidden
                                ">
                        <p className="">
                            <span className="bg-gradient-to-b
                                       from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
                                         text-transparent bg-clip-text max-xs:w-[75px] max-xs:h-[81px]"
                            >
                                Based</span>
                            <span>  in syria</span>
                        </p>


                        <div className=" shadow-[rgba(0,0,0,0.5)] 
                shadow-lg border-[3px] border-black
                 w-[100px] h-[108px]  overflow-hidden
                  rounded-full bg-slate-600 max-xs:w-[75px] max-xs:h-[81px]" >
                            <img
                                src={safita} alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                    <div className="flex justify-center
                                items-center  gap-5 
                                max-sm:flex-wrap  max-sm:mt-5 xs:hidden
                               
                                ">
                        <p className="flex  items-center justify-center gap-2">
                            <span className="bg-gradient-to-b
                                       from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
                                         text-transparent bg-clip-text"
                            >
                                Based </span> 
                            <span>  in  syria</span>
                        </p>


                        <div className=" shadow-[rgba(0,0,0,0.5)] 
                shadow-lg border-[3px] border-black
                 w-[100px] h-[108px]  overflow-hidden
                  rounded-full bg-slate-600 max-xs:w-[40%] max-xs:h-[40%] " >
                            <img
                                src={safita} alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>


                </div>

                <p className="text-[18px]  
                 text-center
                 mt-7 font-poppins text-gray-600
               px-[10px] max-xs:text-[14px]  ">
                    "I'm doing this as a way to practice my frontend
                    development skills, explore
                    <br className="sm:block hidden" />

                    different design styles, and have fun."
                </p>
                <Button />
            </div>







        </section>
    )
}