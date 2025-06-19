import { useState } from "react";
import { arrow, husse } from "../assets";



export default function About() {


    const [textmore, settextmore] = useState(false)

    return (
        <div className="pt-32 max-xs:pt-1" id="About" >
            <section className="flex items-center justify-center gap-8 mt-20  m-auto max-xs:flex-col xs:hidden ">

                <div className="flex items-center justify-center gap-2
                                
">


                    <div className=" shadow-[rgba(0,0,0,0.5)] shadow-lg border-[3px]
     border-primary w-[40%] 
      overflow-hidden rounded-full
       bg-slate-600" >
                        <img className="w-full h-full object-cover" src={husse} alt="hussen" />

                    </div>
                    <div className="w-[50%] flex items-center justify-center flex-col">
                        <p className="flex  flex-wrap
              items-center  gap-2 font-bold text-[32px] " >
                            <span className="bg-gradient-to-b
         from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
        text-transparent bg-clip-text"> About</span>
                            <span className="">Me</span>

                        </p>
                        <p className="text-[18px] text-center font-bold text-primary font-poppins ">
                            Frontend <br /> Developer
                        </p>
                    </div>


                </div>


                <div className="w-[90%]">

                    <p
                        className="font-poppins font-semibold text-[13px] text-gray-600 "
                    >

                        Hello! I am Hussen, a passionate front-end developer focused on design and user experience. With over 2 years of
                        experience in web development, I work with technologies such as HTML, CSS, JavaScript, and particularly React and
                        Tailwind CSS. Over the past few years, I have built a variety of interactive applications that combine high
                        performance with appealing design. Using React, I enjoy organizing my code and building reusable components,
                        which makes managing and developing applications much easier. As for Tailwind CSS, I appreciate its flexibility
                        and ability to speed up the design process, allowing me to create custom and attractive interfaces with ease.
                        I currently reside in Syria, where I thrive under pressure and often take on additional responsibilities.
                        


                        {textmore && "Alongside my work, I am pursuing a degree in Telecommunications and Electronics Alongside my work, I am pursuing a degree in Telecommunications and Electronics"}
                    </p>

                    <button

                        onClick={() => {

                            settextmore((prev) => {
                                if (prev) {
                                    window.scrollBy({
                                        top: -350,
                                        behavior: "smooth"
                                    })
                                }
                                return !prev
                            })

                        }}

                        className="bg-primary text-white  py-2 px-3 cursor-pointer rounded-2xl
     flex justify-center items-center  
     font-semibold text-[12px] font-poppins mt-4
    "
                    >

                        {!textmore ? "See More" : "See Less"}


                    </button>

                </div>


            </section>



            <section className="max-xs:hidden flex items-center justify-center gap-8 mt-20  m-auto max-xs:flex-col ">
                <div className=" shadow-[rgba(0,0,0,0.5)] shadow-lg border-[5px]
                                border-primary w-[300px] 
                               overflow-hidden rounded-full
                               bg-slate-600" >
                    <img className="w-full h-full object-cover" src={husse} alt="hussen" />
                </div>
                <div className="w-[500px]">
                    <p className="flex  
         items-center  gap-2 font-bold text-[34px] " >
                        <span className="bg-gradient-to-b
    from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
   text-transparent bg-clip-text"> About</span>
                        <span className="">Me</span>

                    </p>
                    <p className="text-[18px] font-bold text-primary font-poppins 
">Frontend Developer</p>
                    <p
                        className="font-poppins font-semibold text-[14px] mt-3"
                    >
                        Hello! I am Hussen, a passionate front-end developer focused on design and user experience. With over 2 of years of experience in web development, I work with technologies such as HTML, CSS, JavaScript, and particularly React and Tailwind CSS.

                        Over the past few years, I have built a variety of interactive applications that combine high performance with appealing design. Using React, I enjoy organizing my code and building reusable components, which makes managing and developing applications much easier. As for Tailwind CSS, I appreciate its flexibility and ability to speed up the design process, allowing me to create custom and attractive interfaces with ease.

                        {textmore && "  I am committed to staying updated with the latest trends in web development, and I consider continuous learning an essential part of my professional journey. I am passionate about enhancing user experience and gathering valuable feedback from users to improve the final outcome.If you have any inquiries or would like to discuss potential projects that align with our vision, please feel free to reach out to me!"}



                    </p>

                    <button

                        onClick={() => {

                            settextmore((prev) => !prev)

                        }}

                        className="bg-primary text-white  py-2 px-4 rounded-2xl
flex justify-center items-center  
font-semibold text-[14px] font-poppins mt-8
"
                    >

                        See more


                    </button>

                </div>
            </section>


        </div>


    )
}


