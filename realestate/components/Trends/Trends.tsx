
function Trends() {
  return (
    <div className="relative bg-gradient-to-t from-gray-400 to-blue-300 mb-8 pt-28 md:pt-0">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/background/2.jpg')",
        }}
      ></div>
      <div className="relative mx-auto px-8 py-28 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mt-8 mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-4xl text-white font-bold mb-5 drop-shadow-[0_5px_4px_rgba(0,0,0,0.5)]">
            TOP TRENDS TO WATCH
          </h1>
          <button className=" text-white bg-transparent border-white border-2 px-6 py-2 rounded-lg drop-shadow-[0_5px_4px_rgba(0,0,0,0.5)] 
          hover:bg-blue-500 duration-300">EXPLORE</button>

        </div>
      </div>
    </div>
  )
}

export default Trends