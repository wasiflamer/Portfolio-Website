// imports for shapes
import { Donut } from "react-awesome-shapes";

// imports for icons ( fontawesome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <div className="bg-gradient-to-r from-[#E8C547] to-[#E8C547] rounded-lg p-10 z-50">
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
              <h1>Things i know well </h1>
            </div>
            <div className="flex mt-10 gap-4 flex-row">
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
