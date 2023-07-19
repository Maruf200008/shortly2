import { ImLink } from "react-icons/im"
import { MdEditDocument } from "react-icons/md"

const Hero = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-center  mx-auto p-4   ">
      <div className=" flex items-center justify-center flex-col gap-y-5 ">
        <h2 className=" text-center mt-16 text-[35px] md:text-[50px] font-bold text-primary ">
          Create Short Links!
        </h2>
        <p className=" text-center text-gray-500 md:w-[700px]">
          Capsulink is a custom short link personalization tool that enables you
          to target, engage, and drive more customers, Get started for free
        </p>
      </div>
      <div className="  w-full   mt-20 flex items-center justify-center flex-col  ">
        <form className=" w-full sm:w-[70%] lg:w-[50%] bg-white p-7 shadow-xl shadow-primary/10 rounded-md">
          <label className="  mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <ImLink />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-7 pl-10  text-gray-900 focus:outline-none rounded-lg bg-[#F6F5FC] "
              placeholder="Paste a link to shorten it..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-4 bg-gradient-to-r from-primary to-[#7770DE]  font-medium rounded-lg text-sm px-6 py-3 shadow-lg "
            >
              Shorten
            </button>
          </div>
        </form>

        <p className=" py-10 text-sm text-gray-400 text-center sm:text-left">
          Use it, its Free...Fast - Secure - Long Term Link
        </p>

        <div className=" mt-5 flex md:flex-row flex-col  items-center justify-between bg-[#F6F5FC] px-5  sm:px-10 py-5 rounded-md gap-10  md:gap-20">
          <a href="/">
            <p className=" text-gray-500 text-center md:text-left">
              https://www.npmjs.com/package/react-copy-to-clipboard
            </p>
          </a>
          <div className=" flex md:flex-row flex-col items-center justify-between gap-5">
            <a href="/">
              <p className=" text-primary">https://www.facebook.com/</p>
            </a>
            <button className=" bg-gradient-to-r from-primary to-[#7770DE] p-3 text-lg text-white rounded-md">
              <MdEditDocument />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
