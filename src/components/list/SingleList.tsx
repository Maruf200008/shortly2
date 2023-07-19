import { BiLinkExternal } from "react-icons/bi"

const SingleList = () => {
  return (
    <div>
      <div className=" w-full lg:flex-row flex-col flex gap-10 items-center justify-center">
        <div className="bg-white rounded-md p-5 flex sm:flex-row flex-col  items-center sm:gap-20  space-y-5 md:space-y-0">
          <div>
            <p className=" text-lg font-medium  text-center text-primary">
              asdfasdfadadfs
            </p>
          </div>
          <div className=" flex md:flex-row flex-col  items-center gap-5">
            <a
              target="_"
              href="/"
              className=" bg-gradient-to-r from-primary to-[#7770DE] p-3 rounded-md text-white font-bold w-full"
            >
              <BiLinkExternal size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleList
