function Codeblock() {
  return (
    <div className='flex justify-center'>
      <div className='mockup-code m-10 bg-gradient-to-r from-[#8360c3] to-[#2ebf91] '>
        <pre data-prefix='$'>
          <code className=' text-white text-bold text-lg '>
            Some of my hobby coded projects !
          </code>
        </pre>
        <code className=' text-white text-bold text-lg '>
          <div className=' mx-10 loading loading-dots loading-lg text-white'></div>
        </code>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <div className='flex justify-center'>
      <div className='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box'>
        <div id='item1' className='carousel-item'>
          <img
            src='/images/background.jpg'
            className='rounded-box max-w-sm max-h-full'
          />
        </div>
        <div id='item2' className='carousel-item'>
          <img
            src='/images/background.jpg'
            className='rounded-box max-w-sm max-h-full'
          />
        </div>
        <div id='item3' className='carousel-item'>
          <img
            src='/images/background.jpg'
            className='rounded-box max-w-sm max-h-full'
          />
        </div>
      </div>

      <div class='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' class='btn btn-primary'>
          1
        </a>
        <a href='#item2' class='btn btn-primary'>
          2
        </a>
        <a href='#item3' class='btn btn-primary'>
          3
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className='hero min-h-full bg-base-900 '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='drop-shadow-2xl'>
          <img
            src='/images/wasi.jpg'
            className='max-w-lg mask mask-squircle '
          />
        </div>
        <div>
          <h1 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1D976C] to-[#93F9B9]'>
            I AM WASEEM
          </h1>
          <p className='py-6 text-primary-content mr-10'>
            A passionate React developer with a keen eye for detail and a love
            for innovation. I thrive on crafting captivating web experiences
            with clean code, dedicated to delivering so lutions that leave a
            lasting impact. Let's build something incredible together!"
          </p>
          <button className='btn btn-neutral btn-wide text-white normal-case '>
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className='navbar-center bg-primary text-primary-content m-20 p-2 rounded-full shadow-md'>
      <div className='flex justify-between mx-4'>
        <div>
          <a className='btn btn-ghost normal-case text-xl bg-slate-50 text-primary-content hover:bg-slate-50'>
            Portfolio
          </a>
          <ul className='menu menu-horizontal bg-primary-content text-neutral-content w-100 rounded-box mx-2'>
            <li>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                  />
                </svg>
                Item 2
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                Item 1
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
                Item 3
              </a>
            </li>
          </ul>
        </div>

        <div className='form-control'>
          <label className='cursor-pointer label'>
            <label className='swap swap-rotate mx-2'>
              {/* this hidden checkbox controls the state */}
              <input type='checkbox' />

              {/* sun icon */}
              <svg
                className='swap-on fill-current w-10 h-10 text-neutral-content'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
              </svg>

              {/* moon icon */}
              <svg
                className='swap-off fill-current w-10 h-10 text-neutral-content'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
              </svg>
            </label>
            <input
              type='checkbox'
              className='toggle toggle-primary-content'
              uncheck
            />
          </label>
        </div>
      </div>
    </div>
  );
}

function Bar2() {
  return (
    <div className='navbar bg-primary text-primary-content mx-2 my-2 rounded-full shadow-md'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Socials</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl mx-4'>daisyUI</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Socials</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className=' btn btn-primary-content normal-case mx-4'>Dark Mode</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Bar2 />
      <div className='divider divider-vertical mx-24'></div>
      <Hero />
      <div className='divider divider-vertical mx-24'></div>
      <Codeblock />
      <Showcase />
    </>
  );
}
export default App;
