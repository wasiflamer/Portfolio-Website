function Codeblock() {
  return (
    <div className="flex justify-center  bg-[#2E294E]">
      <div className="mockup-code m-10 bg-gradient-to-r from-[#8360c3] to-[#2ebf91] ">
        <pre data-prefix="$">
          <code className=" text-white text-bold text-lg ">
            Some of my hobby coded projects !
          </code>
        </pre>
        <code className=" text-white text-bold text-lg ">
          <div className=" mx-10 loading loading-dots loading-lg text-white"></div>
        </code>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <div className="flex flex-col space-y-4 justify-center text-center items-center bg-[#2E294E]">
      <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
        <div id="item1" className="carousel-item">
          <img
            src="/images/background.jpg"
            className="rounded-box max-w-sm max-h-full"
          />
        </div>
        <div id="item2" className="carousel-item">
          <img
            src="/images/background.jpg"
            className="rounded-box max-w-sm max-h-full"
          />
        </div>
        <div id="item3" className="carousel-item">
          <img
            src="/images/background.jpg"
            className="rounded-box max-w-sm max-h-full"
          />
        </div>
      </div>
      <div>
        <div className="join grid grid-cols-2">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="hero min-h-full bg-gradient-to-b from-[#011638] to-[#011028] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* img section  */}
          <div className="drop-shadow-2xl">
            <img src="/images/wasi.png" className="max-w-lg rounded-md " />
          </div>
          {/* text section  */}
          <div className="bg-gradient-to-r from-[#E8C547] to-[#E8C547] p-10 rounded-lg">
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
              A passionate React developer with a keen eye for detail and a love
              for innovation. I thrive on crafting captivating web experiences
              with clean code, dedicated to delivering solutions that leave a
              lastingimpact Let's build something incredible together!"
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
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
                  alt=""
                  className="w-18 h-12"
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
                  alt=""
                  className="w-18 h-12"
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
                  alt=""
                  className="w-18 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Bar() {
  return (
    <div className="ml-2 mr-2">
      <div className="navbar bg-transparent text-white mx-2 my-2 rounded-md shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Socials</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Socials</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="flex flex-col bg-[#011638]">
        <Bar />
        <Hero />
      </div>

      <Codeblock />
      <Showcase />
    </>
  );
}
export default App;
