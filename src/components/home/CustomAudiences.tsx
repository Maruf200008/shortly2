import bgImg from "../../images/bg2.png"
import computerImg from "../../images/computer.png"

const CustomAudiences = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className=" bg-no-repeat">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 mt-10 ">
        <div className="grid lg:grid-cols-2 mt-14 ">
          <div className="mt-16 w-full lg:w-[450px] space-y-5 text-white ">
            <h2 className=" lg:text-left text-[35px] md:text-[45px]   font-bold text-center">
              Build Custom Audiences from{" "}
              <span className=" text-secondary">every URL</span>
            </h2>
            <p className=" text-center lg:text-left md:px-10 lg:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque molestiae quod, quia corporis optio velit
              necessitatibus eos laborum laboriosam illo explicabo dolores
              recusandae similique mollitia!
            </p>
          </div>
          <div className=" lg:ml-[-80px] xl:ml-[-180px] mt-[-170px] order-first lg:order-last ">
            <img src={computerImg} alt="computer" />
          </div>
        </div>
        <div className=" w-full my-20">
          <div className=" text-center  ">
            <h2 className=" hidden md:block text-[150px] font-extrabold  text-transparent bg-clip-text bg-gradient-to-b from-[#5a52c4] to-primary ">
              Our Statistics
            </h2>
          </div>
          <div className=" grid md:grid-cols-3 mt-[-50px] gap-10">
            <div className=" text-center text-white space-y-3">
              <p className=" text-xl">Total Link Short</p>
              <h2 className=" text-[35px] font-bold">13467.796</h2>
            </div>
            <div className=" text-center text-white space-y-3">
              <p className=" text-xl">Clicked Links</p>
              <h2 className=" text-[35px] font-bold">134.676.635</h2>
            </div>
            <div className=" text-center text-white space-y-3">
              <p className=" text-xl">Total Users</p>
              <h2 className=" text-[35px] font-bold">43.651</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomAudiences
