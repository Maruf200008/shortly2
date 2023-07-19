import { BiSolidMessageDetail } from "react-icons/bi"
import { BsGraphUpArrow } from "react-icons/bs"
import { ImLink } from "react-icons/im"

const Possibilities = () => {
  return (
    <div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center  mx-auto p-4 mt-10 ">
        <div className=" flex items-center justify-center flex-col gap-y-5 ">
          <h2 className=" text-center mt-16 text-[35px] md:text-[50px] font-bold text-primary ">
            A short link, infinite possibilities
          </h2>
          <p className=" text-center text-gray-500 md:w-[500px]">
            With the advanced intelligent link shortening service, you can
            customize your links and share them easily
          </p>
        </div>

        <div className=" grid md:grid-cols-3 gap-20 mt-20 md:mt-10">
          <div className=" flex items-center justify-center flex-col space-y-5">
            <div className=" text-3xl text-primary  ">
              <ImLink />
            </div>
            <div className=" text-center space-y-4 ">
              <h2 className=" text-3xl font-bold text-primary">
                Custom Domains
              </h2>
              <p className=" text-gray-500">
                Track audience individually for each brand, website or client by
                using your own domain or subdomain for link shortening.
              </p>
            </div>
            <p className=" text-2xl text-gray-300">01</p>
          </div>
          <div className=" flex items-center justify-center flex-col space-y-5 bg-white shadow-2xl p-5 rounded-xl shadow-primary/20">
            <div className=" text-3xl text-primary  ">
              <BsGraphUpArrow />
            </div>
            <div className=" text-center space-y-4 ">
              <h2 className=" text-3xl font-bold text-primary">Track Clicks</h2>
              <p className=" text-gray-500">
                Focus your or your client's efforts on the most promising
                campaigns by taking actions based on comprehensive statistics
              </p>
            </div>
            <p className=" text-2xl text-gray-300">02</p>
          </div>
          <div className=" flex items-center justify-center flex-col space-y-5">
            <div className=" text-3xl text-primary  ">
              <BiSolidMessageDetail />
            </div>
            <div className=" text-center space-y-4 ">
              <h2 className=" text-3xl font-bold text-primary">
                Friendly Support{" "}
              </h2>
              <p className=" text-gray-500">
                We really care about your success in using short links, so you
                always get answers.
              </p>
            </div>
            <p className=" text-2xl text-gray-300">03</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Possibilities
