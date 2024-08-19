// imports for shapes
import { Donut } from "react-awesome-shapes";

// imports for icons ( fontawesome)
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
      <div className="hero min-h-full bg-gradient-to-b from-[#011638] to-[#011028] ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          {/* img section  */}
          <div className="drop-shadow-2xl animate-fadeinright">
            <div>
              <Donut
                color="#f43f5e"
                size="180px"
                width={["40px", "40px", "60px", "60px"]}
                zIndex={2}
              />
            </div>
            <img src="/images/newpsd.png" className="max-w-lg rounded-md" />
          </div>
          {/* text section  */}
          <div className="bg-gradient-to-r from-[#E8C547] to-[#E8C547] rounded-lg p-10 z-50 drop-shadow-lg">
            <h1
              className="text-8xl font-bold bg-clip-text
           text-transparent bg-gradient-to-r from-[#D11149] to-[#D11149]"
            >
              Hey !
            </h1>
            <h1
              className="text-5xl font-bold bg-clip-text
           text-transparent bg-gradient-to-r from-[#011638] to-[#011028]"
            >
              I AM WASEEM
            </h1>
            <p className="py-6 text-primary-content mr-10">
              A Software developer with a keen eye for detail and a love for
              innovation. I thrive on crafting captivating web experiences with
              clean code, dedicated to delivering solutions that leave a lasting
              impact Let's build something incredible together!"
            </p>
            <button
              className="btn btn-neutral
           btn-wide text-white normal-case  hover:text-neutral hover:bg-white "
            >
              Hire Me
            </button>
            <div className="mt-6 font-bold text-4xl">
              <h1>Things i know </h1>
            </div>
            <div className="flex mt-10 gap-4 flex-row">
              <div>
                <FontAwesomeIcon icon={faJs} size="3x" />
              </div>
              <div>
                <FontAwesomeIcon icon={faHtml5} size="3x" />
              </div>
              <div>
                <FontAwesomeIcon icon={faCss3} size="3x" />
              </div>
              <div>
                <FontAwesomeIcon icon={faReact} size="3x" />
              </div>
              <div>
                <FontAwesomeIcon icon={faNodeJs} size="3x" />
              </div>
              <div>
                <FontAwesomeIcon icon={faFlutter} size="3x" />
              </div>
              <div>
                <FontAwesomeIcon icon={faGit} size="3x" />
              </div>
              <div>
                <svg
                  preserveAspectRatio="xMidYMid"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 153.6"
                  className="w-1/4 mt-2"
                >
                  <path
                    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                    fill="#333c4d"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
