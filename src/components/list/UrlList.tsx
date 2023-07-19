import { SingleList } from "."

const UrlList = () => {
  return (
    <div className=" bg-slate-200">
      <div className="max-w-screen-xl   mx-auto p-4 py-20 ">
        <div className=" space-y-10">
          <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-10 ">
            <SingleList />
            <SingleList />
            <SingleList />
            <SingleList />
            <SingleList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrlList
