function Hero() {
  return (
    <div className='hero min-h-full bg-base-900 '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='stack w-full h-full'>
          <img
            src='https://images.pexels.com/photos/17029537/pexels-photo-17029537/free-photo-of-young-woman-in-a-modern-denim-outfit.jpeg'
            className='max-w-sm  shadow-2xl mask mask-parallelogram-3'
          />
          <img
            src='https://images.pexels.com/photos/17029537/pexels-photo-17029537/free-photo-of-young-woman-in-a-modern-denim-outfit.jpeg'
            className='max-w-md  shadow-2xl mask mask-parallelogram-4'
          />
        </div>
        <div>
          <h1 className='text-5xl font-bold'>I AM WASEEM</h1>
          <p className='py-6 text-primary-content mr-10'>
            A passionate React developer with a keen eye for detail and a love
            for innovation. I thrive on crafting captivating web experiences
            with clean code, dedicated to delivering so lutions that leave a
            lasting impact. Let's build something incredible together!"
          </p>
          <button className=' btn btn-primary btn-wide text-primary-content normal-case'>
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
            <code className='bg-slate-50 text-primary-content'>
              Some of my hobby coded projects !
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
export default App;
