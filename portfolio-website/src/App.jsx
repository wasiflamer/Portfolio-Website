function Hero() {
  return (
    <div className='hero min-h-full bg-base-900 '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='stack w-full h-full'>
          <img
            src='/images/wasi.jpg'
            className='max-w-xl mask mask-squircle bg-gradient-to-r from-cyan-500 to-blue-500 '
          />
        </div>
        <div>
          <h1 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8360c3] to-[#2ebf91]'>
            I AM WASEEM
          </h1>
          <p className='py-6 text-primary-content mr-10'>
            A passionate React developer with a keen eye for detail and a love
            for innovation. I thrive on crafting captivating web experiences
            with clean code, dedicated to delivering so lutions that leave a
            lasting impact. Let's build something incredible together!"
          </p>
          <button className=' btn btn-primary btn-wide text-white normal-case '>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className='navbar-center bg-secondary text-primary-content m-20 p-2 rounded-full shadow-md'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl bg-slate-50 text-primary-content hover:bg-slate-50'>
          Portfolio
        </a>

        <div className='form-control w-52'>
          <label className='cursor-pointer label'>
            <span className='label-text'>Dark Mode</span>
            <input type='checkbox' className='toggle' uncheck />
          </label>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Bar />
      <div className='divider divider-vertical mx-24'></div>
      <Hero />
      <div className='divider divider-vertical mx-24'></div>

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
    </>
  );
}
export default App;
