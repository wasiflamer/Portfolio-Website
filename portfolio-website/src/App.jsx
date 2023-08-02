function Hero() {
  return (
    <div className='hero min-h-full bg-base-900 '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src='https://images.pexels.com/photos/17029537/pexels-photo-17029537/free-photo-of-young-woman-in-a-modern-denim-outfit.jpeg'
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>Stuff Stuff</h1>
          <p className='py-6 text-primary-content mr-10'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            obcaecati, dolores id ea perferendis ducimus. Obcaecati facilis,
            commodi, cupiditate voluptates molestias doloremque ipsa, iste sunt
            praesentium atque provident veritatis facere!
          </p>
          <button className='btn btn-primary w-60 normal-case'>Contact</button>
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className='navbar-center bg-secondary text-primary-content m-20 p-2 rounded-full shadow-md'>
      <div className='flex-1'>
        <a className='btn btn-accent normal-case text-xl '>Waseem Raza</a>
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
    </>
  );
}
export default App;
