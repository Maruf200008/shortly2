import { MdDeleteForever } from "react-icons/md"

const EditOrDelete = () => {
  return (
    <div className=" bg-slate-200">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4 py-20 ">
        <div className=" w-full lg:flex-row flex-col flex gap-10 items-center justify-center">
          <form className=" bg-white  p-4 rounded-md flex md:flex-row flex-col items-center gap-5 w-full justify-center shadow-xl shadow-primary/10 ">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className=" w-full focus:outline-none  rounded-md p-4 bg-[#F6F5FC] "
            />
            <button
              type="submit"
              className=" w-full md:w-[150px]  font-semibold bg-gradient-to-r from-primary to-[#7770DE]  p-4 rounded-md text-white"
            >
              Edit Now
            </button>
          </form>

          <div className="bg-white rounded-md p-5 flex sm:flex-row flex-col  items-center sm:gap-20  space-y-5 md:space-y-0 shadow-xl shadow-primary/10">
            <div>
              <p className=" text-lg font-medium  text-center text-primary">
                asdfasfd
              </p>
            </div>
            <div className=" flex md:flex-row flex-col  items-center gap-5">
              <button className=" bg-red-600/25 hover:bg-red-600 hover:text-white transition p-3 rounded-md text-red-500 font-bold w-full">
                <MdDeleteForever size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditOrDelete
