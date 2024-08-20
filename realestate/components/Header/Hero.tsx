function Hero() {
    return (
      <div className="relative bg-gradient-to-t from-gray-400 to-blue-300 mb-8 pt-28 md:pt-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/background/bg.jpg')",
          }}
        ></div>
        <div className="relative mx-auto px-8 py-28 flex flex-col gap-2 md:flex-row items-center justify-evenly">
          <div className="mt-8 mb-8 md:mb-0 items-center">
            <h1 className="text-4xl md:text-4xl font-bold mb-5 drop-shadow-[0_5px_2px_rgba(0,0,0,0.5)]">
              FIND YOUR <br /> <span className="typewriter">DREAM HOME</span>
            </h1>
            <p className="text-lg md:text-sm mb-8">
              The most complete source of homes sales & real estates you will ever seen
            </p>
  
            <form className="max-w-md mx-auto mb-6">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red"
                  placeholder="Address, School, City, Zip..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero;
  