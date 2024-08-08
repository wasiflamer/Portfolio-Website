function SingleCard() {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">GameRaid</h2>
          <p>blah blah blah ! </p>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              open modal
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">GameRaid</h3>
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  molestiae excepturi illum aliquam nam ut minima, sed at
                  quibusdam voluptates consequuntur? Exercitationem error
                  voluptas ut pariatur aperiam ducimus veritatis excepturi.
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
}

function Codeblock() {
  return (
    <>
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
    </>
  );
}

function Showcase() {
  return (
    <>
      <div className="flex justify-center flex-row gap-4 p-4 ">
        <SingleCard />
        <SingleCard />
      </div>
    </>
  );
}

function Hero() {
  return (
    <>
      <div className="hero min-h-full bg-gradient-to-b from-[#011638] to-[#011028] ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          {/* img section  */}
          <div className="drop-shadow-2xl  animate-fadeinright">
            <img src="/images/wasi.png" className="max-w-lg rounded-md" />
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
    <div className="m-4">
      <div className="navbar bg-[#011638] text-white mx-2 my-2 rounded-md shadow-2xl ">
        <div className="navbar-center">
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
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow rounded-md w-80 bg-[#011638]"
            >
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Socials</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>Socials</a>
            </li>
            <li>
              <a>Contact</a>
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
      <div className="flex flex-col bg-[#011028]">
        <Bar />
        <Hero />
        <h1
          className="text-8xl font-bold bg-clip-text
          text-transparent
          bg-gradient-to-r from-[#D11149] to-[#D11149]
          m-4"
        >
          Portfolio
        </h1>
      </div>
      <Codeblock />
      <Showcase />
    </>
  );
}
export default App;
