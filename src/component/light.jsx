// import gsap from "gsap"
// import { useEffect, useRef } from "react"


// export default function Light() {

//     const ref =useRef(null)

//     useEffect(() => {  
//         const rotationAnimation = gsap.to(ref.current, {  
//             rotation: 360,  
//             repeat: -1,  
//             duration: 2,  
//             ease: "linear",  
//             onRepeat: () => {  
//                 // Reset the rotation to 0 after completing a full rotation  
//                 gsap.set(ref.current, { rotation: 0 });  
//             }  
//         });  

//         // Clean up the animation on component unmount  
//         return () => {  
//             rotationAnimation.kill();  
//         };  
//     }, []); 


//     return (
//         <div
//         ref={ref}
//         className="absolute pink__gradient top-0 left-10 w-[30%] h-[40%]
//             max-xs:left-0 max-xs:h-[12%] max-xs:w-[50%] max-xs:blur-[18px]
//             " />
//     )
// }



import gsap from "gsap";  
import { useEffect, useRef } from "react";  

export default function Light() {  
    const ref = useRef(null);  

    useEffect(() => {  
        const rotationAnimation = gsap.to(ref.current, {  
            rotation: '+=360',   
            repeat: -1,  
            duration: 5,  
            ease: "linear"  
        });  

        
        return () => {  
            rotationAnimation.kill();  
        };  
    }, []);  

    return (  
        <div  
            ref={ref}  
            className="absolute pink__gradient top-0 left-[-150px] w-[30%] h-[40%]  
                max-xs:left-[-90px] max-xs:h-[12%] max-xs:w-[50%] max-xs:blur-[18px]"  
        />  
    );  
}