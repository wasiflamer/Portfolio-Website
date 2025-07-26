import { Donut } from "react-awesome-shapes";
import { PolygonCard } from "react-awesome-shapes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faFlutter,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-b from-[#011638] to-[#011028] p-6 sm:p-12">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-between lg:justify-center">
          {/* Image Section */}
        
        <div className="relative flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0 drop-shadow-2xl animate-fadeinright">
  {/* Main Donut on the right */}
  <PolygonCard
      height="300px"
    width="600px"
    color="#f43f5e"
    zIndex={2}
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
  />
  {/* Small Donut below main image, also on the right */}
  <PolygonCard
    color="#FFFFF"
        height="200px"
    width="150px"

    zIndex={2}
    className="absolute top-[-30px] left-10 z-0"
  />
  <img
    src="/images/newpsd.png"
    className="relative max-w-full h-auto rounded-md -mt-20 z-10"
    alt="Hero Image"
  />
</div>

            

          {/* Text Section */}
          <div className="flex flex-col items-start text-center -mt-60 lg:text-left w-full lg:w-1/2">
            <div className="bg-gradient-to-r from-[#E8C547] to-[#E8C547] w-full lg:w-auto p-6 lg:p-10 border-4 rounded-lg drop-shadow-lg">
              <h1 className="text-5xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D11149] to-[#D11149] mb-4">
                Hey!
              </h1>
              <h1 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#011638] to-[#011028] mb-6">
                I AM WASEEM
              </h1>
              <p className="py-4 lg:py-6 text-base lg:text-lg text-primary-content leading-relaxed">
                A Software developer with a keen eye for detail and a love for
                innovation. I thrive on crafting captivating web experiences
                with clean code, dedicated to delivering solutions that leave a
                lasting impact. Let's build something incredible together!
              </p>
            <button
    onClick={() => {
      document.getElementById("email")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="btn btn-neutral btn-wide text-white normal-case hover:text-neutral hover:bg-white transition-all duration-300"
  >
    Contact Me
  </button>
              <div className="mt-6 font-bold text-2xl lg:text-4xl">
                <h1>My Stack</h1>
              </div>
              {/* Stack Icons */}
              <div className="flex flex-wrap mt-6 gap-4 justify-center lg:justify-start">
                <FontAwesomeIcon icon={faJs} size="3x" />
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <FontAwesomeIcon icon={faCss3} size="3x" />
                <FontAwesomeIcon icon={faReact} size="3x" />
                <FontAwesomeIcon icon={faNodeJs} size="3x" />
                <FontAwesomeIcon icon={faFlutter} size="3x" />
                <FontAwesomeIcon icon={faGit} size="3x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



