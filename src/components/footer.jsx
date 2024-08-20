// imports for icons ( fontawesome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faReddit,
  faFacebook,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-gradient-to-b from-[#011638] to-[#011028] text-white  p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-[#D11149]">Find Me On</h1>
              <p className="flex flex-row gap-4 justify-center py-6">
                <div className="hover:animate-tada">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="3x"
                    color="#ffffff"
                  />
                </div>
                <div className="hover:animate-tada">
                  <FontAwesomeIcon icon={faReddit} size="3x" color="#ffffff" />
                </div>
                <div className="hover:animate-tada">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="3x"
                    color="#ffffff"
                  />
                </div>
                <div className="hover:animate-tada">
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                    size="3x"
                    color="#ffffff"
                  />
                </div>
                <div className="hover:animate-tada">
                  <FontAwesomeIcon icon={faGithub} size="3x" color="#ffffff" />
                </div>
              </p>
            </div>
          </div>
        </nav>
        <aside>
          <div>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </div>
        </aside>
      </footer>
    </>
  );
}
