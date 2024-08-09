import Bar from "./components/navbar";
import Hero from "./components/hero";
import Codeblock from "./components/codeblock";
import Showcase from "./components/showcase";

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
      <h1
        className="text-8xl font-bold bg-clip-text
          text-transparent
          bg-gradient-to-r from-[#E8C547] to-[#E8C547]
          m-4"
      >
        Socials
      </h1>
    </>
  );
}
export default App;
