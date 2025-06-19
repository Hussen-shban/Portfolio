
export default function Pro(props) {


    return (
                <div
                    data-aos="fade-up"
                    className=" w-[510px] h-[450px] flex flex-col justify-center items-center max-xs:w-[100vw] max-xs:h-[300px]"
                >
                    <div className="bg-dimWhite  w-[500px] h-[400px] rounded-[50px] shadow-[rgba(0,0,0,0.3)] shadow-2xl flex items-center justify-center max-xs:p-1 max-xs:w-[100%] max-xs:h-[200px]">
                        <div className="w-[450px] rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.2)] shadow-2xl max-xs:w-[95%]">
                            <img src={props.img} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full pt-7 px-2">
                        <p className="font-poppins font-semibold text-[20px] max-xs:text-[18px] bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.3)] text-transparent bg-clip-text">
                            {props.name}
                        </p>
                        <div className="flex items-center gap-1">
                            <a
                                className="font-poppins flex items-center justify-center text-gray-600 bg-dimWhite px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                                href={props.code}
                            >
                                Code
                            </a>
                            <a
                                className="font-poppins flex items-center justify-center text-gray-600 bg-dimWhite px-3 py-2 rounded-3xl text-[12px] max-xs:text-[10px]"
                                href={props.web}
                            >
                                Web
                            </a>
                        </div>
                    </div>
                </div>

    )
}