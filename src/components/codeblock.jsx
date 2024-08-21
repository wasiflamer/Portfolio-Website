export default function Codeblock() {
  return (
    <>
      <div className="flex justify-center bg-[#2E294E] ">
        <div className="mockup-code drop-shadow-lg bg-gradient-to-r from-[#3c1053] to-[#3c1053] m-10">
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
