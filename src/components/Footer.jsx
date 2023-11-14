import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className=" absolute w-full -bottom-10 lg:px-20 px-8 py-8 bg-[#E8C4E8] flex lg:flex-row flex-col  justify-between items-center text-[
        #252528] font-normal text-xl font-sans">
       <small className="">All rights reserved 2023 Noodle Pair</small>
      <div className="lg:mt-0 mt-5 lg:text-[16px] text-sm">
        <Link to="/download" className="underline decoration-1 " >Click here to download Noodle Pair Application</Link>
      </div>
    </div>  )
}

export default Footer