// imports for icons ( fontawesome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faReddit,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer id="socials" className="footer footer-center bg-gradient-to-b from-[#011638] to-[#011028] text-white  p-10">
        <nav>
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold text-[#D11149]">Find Me On</h1>
              <p className="flex flex-row gap-4 justify-center py-6">
                <div className="hover:animate-tada">
                  <a
                    href="https://www.instagram.com/waseem_xoxo"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="3x"
                      color="#ffffff"
                    />
                  </a>
                </div>
                <div className="hover:animate-tada">
                  <a
                    href="https://www.reddit.com/user/Less-Pipe-8210"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faReddit}
                      size="3x"
                      color="#ffffff"
                    />
                  </a>
                </div>
                <div className="hover:animate-tada">
                  <a
                    href="https://stackoverflow.com/users/19173882/waseem-raza"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faStackOverflow}
                      size="3x"
                      color="#ffffff"
                    />
                  </a>
                </div>
                <div className="hover:animate-tada">
                  <a href="https://github.com/wasiflamer" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      color="#ffffff"
                    />
                  </a>
                </div>
              </p>
            </div>
          </div>
        </nav>
        <aside>
          <div>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Waseem Raza
          </div>
        </aside>
      </footer>
    </>
  );
}
