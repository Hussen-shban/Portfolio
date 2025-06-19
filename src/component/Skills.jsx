





import { useEffect } from "react";
import { c, html, css, js, tailwind, reactt, next } from "../assets";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("no")) {
              entry.target.classList.add("noo");
            }

            if (entry.target.classList.contains("kk")) {
              entry.target.classList.add("path-1");
            }
            if (entry.target.classList.contains("ff")) {
              entry.target.classList.add("path-2");
            }
            if (entry.target.classList.contains("hh")) {
              entry.target.classList.add("path-3");
            }
            if (entry.target.classList.contains("ww")) {
              entry.target.classList.add("path-4");
            }


          }
        });
      },
      { threshold: 0.5 }
    );

    const elementsToObserve = document.querySelectorAll(
      ".path, .ff, .hh, .ww, .no"
    );

    elementsToObserve.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elementsToObserve.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="font-poppins pt-40 max-xs:pt-12" id="Skills">
      <h1 className="sub-title mb-5 max-xs:text-[40px]">

        <span className="bg-gradient-to-b
                     from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] 
                    text-transparent bg-clip-text"> My </span>
        Skills
      </h1>
      <section className="section ">
        <div className="container1" id="skills">
          <h1 className="heading" data-aos="fade-up">
            Technical skills
          </h1>
          <div className="Technical-bars">
            <div className="bar" data-aos="fade-up">
              <img className="w-[20px] h-[20px]" src={html} alt="html" />
              <div className="indfo">
                <span>HTML</span>
              </div>
              <div className="progress-line html">
                <span className="no"></span>
              </div>
            </div>

            <div className="bar" data-aos="fade-up">
              <img className="w-[20px] h-[20px]" src={css} alt="css" />
              <div className="indfo">
                <span>CSS</span>
              </div>
              <div className="progress-line css">
                <span className="no"></span>
              </div>
            </div>

            <div className="bar" data-aos="fade-up">
              <img className="w-[20px] h-[20px]" src={js} alt="js" />
              <div className="indfo">
                <span>Javascript</span>
              </div>
              <div className="progress-line javascript">
                <span className="no"></span>
              </div>
            </div>

            <div className="bar" data-aos="fade-up">
              <img className="w-[20px] h-[20px]" src={tailwind} alt="tailwind" />
              <div className="indfo">
                <span>Tailwind</span>
              </div>
              <div className="progress-line tailwind">
                <span className="no"></span>
              </div>
            </div>

            <div className="bar" data-aos="fade-up">
              <img className="w-[20px] h-[20px]" src={reactt} alt="react" />
              <div className="indfo">
                <span>React</span>
              </div>
              <div className="progress-line react">
                <span className="no"></span>
              </div>
            </div>

            <div className="bar" data-aos="fade-up">
              <img className="w-[20px] h-[20px]" src={next} alt="react" />
              <div className="indfo">
                <span>Next</span>
              </div>
              <div className="progress-line next">
                <span className="no"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="container1 max-xs:mt-6">
          <h1 className="heading" data-aos="fade-up">
            Professional skills
          </h1>
          <div className="radial-bars">
            <div className="radial-bar " data-aos="zoom-in">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path kk" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">90%</div>
              <div className="text">Creativity</div>
            </div>

            <div className="radial-bar" data-aos="zoom-in">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path ff" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">60%</div>
              <div className="text"> Problem Solving</div>
            </div>

            <div className="radial-bar" data-aos="zoom-in">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path hh" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">70%</div>
              <div className="text">Teamwork</div>
            </div>

            <div className="radial-bar" data-aos="zoom-in">
              <svg x="0px" y="0px" viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path ww" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">85%</div>
              <div className="text"> Communication</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
