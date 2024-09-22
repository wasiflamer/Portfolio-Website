import Bar from "./components/navbar";
import Hero from "./components/hero";
import Codeblock from "./components/codeblock";
import Showcase from "./components/showcase";
import Footer from "./components/footer";
import ContactUs from "./components/Contact";

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
          m-4 "
        >
          Portfolio
        </h1>
      </div>
      <Codeblock />
      <Showcase />
      <ContactUs />
      <Footer />
    </>
  );
}
export default App;
