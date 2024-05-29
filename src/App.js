import './App.css';

function App() {
  return (
    <div className="App">
      <header className="fixed top-0 left-0 w-full py-5 px-28 bg-zinc-950 flex justify-between items-center z-50">
        <a href="#" className='text-2xl text-white font-semibold transition-all duration-1000 hover:text-blue-400' >I'm better than Mr Ariki</a>
        <nav>
            <a href="#Home" className='text-lg text-white font-medium ml-9 transition-all duration-1000 hover:text-blue-400 active:text-blue-400 '>Home</a>
            <a href="#About" className='text-lg text-white font-medium ml-9 transition-all duration-1000  hover:text-blue-400 active:text-blue-400'>About</a>
            <a href="#Services" className='text-lg text-white font-medium ml-9 transition-all duration-1000 hover:text-blue-400 active:text-blue-400'>Services</a>
        </nav>

      </header>
      <section id="Home" className='flex justify-center items-center even:bg-slate-900 odd:bg min-h-screen text-8xl font-bold'>Home</section>
      <section id="About" className='flex justify-center items-center even:bg-slate-900 odd:bg-gray-600 min-h-screen text-8xl font-bold'>About</section>
      <section id="Services" className='flex justify-center items-center even:bg-slate-900 odd:bg-gray-600 min-h-screen text-8xl text-white font-bold'>Services</section>
    </div>
  );
}

export default App;
