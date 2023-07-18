import { Hero } from "../components/home"

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#3c359c]/70 w-[200px] h-[200px] blur-[40px] ml-[-50px] mt-[-100px]  "></div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-50">
        <Hero />
      </div>
    </div>
  )
}

export default Home
