

// // Tobias Ahlin's Portfolio






import { useEffect, useRef, useState } from "react";
import { Navlist } from "../constants";
import { NavLink } from "react-router-dom"; // استيراد NavLink
import { listt, react } from "../assets";
import gsap from "gsap";
import { Link } from "react-scroll";

export default function Navbar() {
    const [ismenuopen, setismenuopen] = useState(false)
    const line1ref = useRef(null)
    const line2ref = useRef(null)
    const line3ref = useRef(null)
    const roundedref = useRef(null)
    const hussenref = useRef(null)
    const span1ref = useRef(null)
    const span2ref = useRef(null)
    const listref = useRef([]);
    const socialref = useRef(null)
    const navref = useRef(null)
    const setRef = (el, index) => {
        listref.current[index] = el;
    };

    const handleSetActive = (section) => {
        // setActiveSection(section); // حفظ اسم القسم النشط
    };

    useEffect(() => {
        gsap.fromTo(navref.current,
            { y: -50, opacity: 0 }, // يبدأ من 100 بكسل إلى الأسفل وشفافية 0  
            { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" } // يرتفع إلى الموضع الأصلي مع شفافية 1  
        );
    }, []);



    const handleClick = () => {
        if (ismenuopen) {

            gsap.to(line1ref.current, { rotate: 0, y: 0, duration: 0.3, ease: "power2.inOut", background: "#ffffff" });
            gsap.to(line2ref.current, { opacity: 1, duration: 0.3, ease: "power2.inOut", background: "#ffffff" });
            gsap.to(line3ref.current, { rotate: 0, y: 0, duration: 0.3, ease: "power2.inOut", background: "#ffffff" });
            gsap.fromTo(roundedref.current,
                { width: "100vw", height: "100vh", borderRadius: 0 },
                { width: "50px", height: "50px", borderRadius: "50%", duration: 0.5 }
            )
            gsap.fromTo(hussenref.current,
                { opacity: 0 },
                { opacity: 0 }
            )

            gsap.fromTo(span1ref.current,
                { opacity: 0, flexGrow: 1 },
                { opacity: 0, flexGrow: 0 }
            )

            gsap.fromTo(span2ref.current,
                { opacity: 0, flexGrow: 1 },
                { opacity: 0, flexGrow: 0 }
            )

            gsap.fromTo(listref.current,
                { opacity: 0, },
                { opacity: 0, }
            )
            gsap.fromTo(socialref.current,
                { opacity: 0, },
                { opacity: 0, }
            )

            document.body.style.overflow = "";
        } else {

            gsap.to(line1ref.current, { rotate: 45, y: 6, duration: 0.3, ease: "power2.inOut", background: "grey" });
            gsap.to(line2ref.current, { opacity: 0, duration: 0.3, ease: "power2.inOut", background: "#e3e3e3" });
            gsap.to(line3ref.current, { rotate: -45, y: -10, duration: 0.3, ease: "power2.inOut", background: "grey" });

            gsap.fromTo(roundedref.current,
                { width: "50px", height: "50px", borderRadius: "50%" },
                { width: "100vw", height: "100vh", borderRadius: 0, duration: 0.4, ease: "power2.in" }
            )
            gsap.fromTo(hussenref.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, delay: 0.5 }
            )

            gsap.fromTo(span1ref.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8, delay: 0.8, flexGrow: 1 }
            )

            gsap.fromTo(span2ref.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8, delay: 0.8, flexGrow: 1 }
            )

            gsap.fromTo(
                listref.current,
                { opacity: 0, y: 0, fontSize: 0 }, // الخصائص الابتدائية
                { opacity: 1, duration: 0.3, delay: 1, y: 0, stagger: 0.2, fontSize: "32px" } // الخصائص النهائية
            );

            gsap.fromTo(
                socialref.current,
                { opacity: 0, y: -5 }, // الخصائص الابتدائية
                { opacity: 1, y: 0, duration: 0.4, delay: 2 } // الخصائص النهائية
            );
            document.body.style.overflow = "hidden";


        }
        setismenuopen(!ismenuopen);
    };

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (ismenuopen) {
            setTimeout(() => {
                setIsVisible(true);
            }, 100);
        } else {
            setTimeout(() => {
                setIsVisible(false);
            }, 400);
        }
    }, [ismenuopen]);

    document.documentElement.style.overflow
    const list = Navlist.map((item, index) => (
        <li
            key={index}
            className="flex items-center justify-center
              font-poppins text-[12px] 
              md:text-[14px] md:font-semibold 
              "
        >

            <Link
                className="bg-white  rounded-full px-2 py-1"
                activeClass=" activeClass"
                to={item}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={() => handleSetActive(item)}
            >
                {item}
            </Link>
        </li >
    ));



    const mlist = Navlist.map((item, index) => (
        <li
            key={index}
            className="flex items-center justify-center
              text-[32px] font-bold cursor-pointer text-gray-500 roboto
              "
        >

            <Link
                className="py-1"

                to={item}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleClick}

            >
                <div
                    ref={(el) => setRef(el, index)}
                >{item}

                </div>

            </Link>
        </li >
    ));


    return (
        <nav
            ref={navref}
            className="mt-4 fixed w-full z-50 flex items-center justify-center ">
            <ul
                className="list-none m-auto flex text-primary 
                 items-center justify-between
                  gap-3 w-fit md:w-[500px] bg-white py-1
                  shadow-[rgba(0,0,0,0.2)] shadow-xl  rounded-[30px] max-md:px-1 md:px-1 max-xs:hidden"
            >
                {list}
            </ul>


            <div className="w-full flex  justify-end px-3 relative xs:hidden  " >
                <div
                    onClick={handleClick}
                    className="w-[30px] cursor-pointer flex flex-col justify-between h-[20px] z-10 "
                >
                    <span ref={line1ref} className="w-full h-[3px] bg-white rounded-[2px]"></span>
                    <span ref={line2ref} className="w-full h-[3px] bg-white rounded-[2px]"></span>
                    <span ref={line3ref} className="w-full h-[3px] bg-white rounded-[2px]"></span>
                </div>



                <div ref={roundedref} className={`bg-white fixed 
                 rounded-full top-[-17px]   left-0 ${isVisible ? "block" : "hidden"
                    } `}  >
                    <div className="pt-[80px] w-[100vw] px-5 overflow-hidden  flex justify-center flex-col items-center 
                    
                    
                    " >
                        <div className="flex w-full items-center justify-center gap-5  ">
                            <span ref={span1ref} className=" bg-gray-500   h-[2px]"></span>
                            <p ref={hussenref} className="text-gray-500 font-poppins roboto opacity-0 font-normal text-[18px]">Hussen SH</p>
                            <span ref={span2ref} className="  bg-gray-500  h-[2px]"></span>
                        </div>

                        <ul className="mt-6 mb-6  ">
                            {mlist}
                        </ul>

                        <div
                            ref={socialref}
                            className="border-t-2 border-b-2 py-5 w-full opacity-0 
                        ">
                            <ul class="flex justify-center mt-5 space-x-7 w-full">
                                <li>
                                    <a
                                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-10 h-10"
                                        >
                                            <path
                                                clip-rule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-10 h-10"
                                        >
                                            <path
                                                clip-rule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-10 h-10"
                                        >
                                            <path
                                                clip-rule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>

                            </ul>

                        </div>


                    </div>
                </div>

            </div>





        </nav>
    );
}
