import { BiLink } from "react-icons/bi"
const Hero = () => {
  return (
    <div className=" w-full">
      <div className=" flex items-center justify-center flex-col gap-y-5">
        <h2 className=" text-center mt-16 text-[50px] font-bold text-primary ">
          Create Short Links!
        </h2>
        <p className=" w-[700px] text-center text-gray-500">
          Capsulink is a custom short link personalization tool that enables you
          to target, engage, and drive more customers, Get started for free
        </p>
      </div>
      <div className=" mt-20 flex items-center justify-center flex-col   ">
        <form className="  w-[750px] bg-white p-10 shadow-2xl rounded-md shadow-primary/20  ">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <div className=" text-gray-400 text-xl">
                <BiLink />
              </div>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full text-lg p-7 pl-10  text-gray-900 focus:outline-none rounded-lg bg-[#F6F5FC] "
              placeholder="Paste a link to shorten it"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 inset-y-3 rounded-md  px-7  shadow-xl shadow-primary/25 mr-2 bg-gradient-to-r from-[#3B359C] to-[#7770DE] "
            >
              Search
            </button>
          </div>
        </form>
        <p className=" py-10 text-sm text-gray-400">
          Use it, its Free...Fast - Secure - Long Term Link
        </p>

        <div className=" px-5 ">
          <div className=" flex items-center justify-between gap-10 bg-slate-500 p-5">
            <div>
              <p>https://goodfangsm.life/product_details/32580250.html</p>
            </div>
            <div>
              <p>asdflasdfladsflasdf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
