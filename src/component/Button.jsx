import { arrow } from "../assets";


export default function Button() {

    const phoneNumber = "963934865509"; 
    const message = encodeURIComponent("مرحبًا، أود التواصل معك."); 

    return (

        <button className="bg-primary rounded-full
        text-white flex justify-center items-center
        w-[200px] h-[50px] gap-3
        font-poppins shadow-[rgba(0,0,0,0.5)] shadow-lg 
        max-xs:w-[160px] max-xs:h-[40px] max-xs:text-[12px]
        max-xs:mt-4 mt-10
        ">
            <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"

            >
                Connect With Me
            </a>
            <img src={arrow} alt="arrow"
                className="w-4 rotate-[84deg]
            max-xs:w-4
            "
            />
        </button>

    )
}