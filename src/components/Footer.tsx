import { AiOutlineTwitter } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import { FaFacebookF } from "react-icons/fa"
import { MdUnsubscribe } from "react-icons/md"
import { RiSendPlaneFill } from "react-icons/ri"
const Footer = () => {
  return (
    <div className=" bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
        <div className="  text-center w-full space-y-4 text-white flex items-center justify-center flex-col ">
          <h2 className=" text-[30px] font-bold">
            Subscribe to our newsletter
          </h2>
          <p className=" md:w-[550px]">
            Subscribe to our newsletter and keep up to date with news and useful
            information on shortening links
          </p>
          <div className=" md:w-[700px]">
            <form className=" mt-10  ">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex text-2xl items-center pl-3 pointer-events-none text-gray-400 ">
                  <MdUnsubscribe />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-7 pl-14  text-gray-900 focus:outline-none rounded-lg bg-gray-50 "
                  placeholder="Enter You Mail Address..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 inset-y-5 bg-secondary  font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className=" my-7 text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam ad dignissimos illo deleniti quis magni a temporibus ab?
              Architecto nesciunt ab sed ipsa recusandae.
            </p>
          </div>
        </div>

        <div className=" w-full">
          <div className=" mt-8">
            <div className=" bg-[#766FDE] w-full h-[1px]" />
            <div className=" flex md:flex-row flex-col  items-center justify-between gap-5">
              <ul className=" flex md:flex-row flex-col items-center gap-5 mt-8 text-white">
                <li>Link retargeting</li>
                <li>FAQ</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Terms & Privacy</li>
                <li>About</li>
              </ul>
              <div>
                <ul className=" flex flex-rowitems-center gap-5">
                  <a href="/">
                    <li className=" p-2 border-2 rounded-full border-[#766FDE] text-[#766FDE] hover:border-blue-500 hover:text-blue-500 text-lg ">
                      <FaFacebookF />
                    </li>
                  </a>
                  <a href="/">
                    <li className=" p-2 border-2 rounded-full border-[#766FDE] text-[#766FDE] hover:border-blue-500 hover:text-blue-500 text-lg ">
                      <AiOutlineTwitter />
                    </li>
                  </a>
                  <a href="/">
                    <li className=" p-2 border-2 rounded-full border-[#766FDE] text-[#766FDE] hover:border-blue-500 hover:text-blue-500 text-lg ">
                      <RiSendPlaneFill />
                    </li>
                  </a>
                  <a href="/">
                    <li className=" p-2 border-2 rounded-full border-[#766FDE] text-[#766FDE] hover:border-blue-500 hover:text-blue-500 text-lg ">
                      <BiLogoLinkedin />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
