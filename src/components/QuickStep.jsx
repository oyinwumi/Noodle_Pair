import Books from "../assets/books.png"
import { Link } from "react-router-dom";


const QuickStep = () => {
  return (
    <div className="relative w-full h-[430px]  " >
       <img src={Books} alt="" className=" absolute w-full h-full  bg-cover mix-blend-overlay"/>
       <div className="text-white text-center ">
        <h3 className="font-font2 font-bold lg:text-[50px] text-2xl pt-16">Take A Quick Step</h3>
        <p className="font-font1 mx-auto lg:w-[856px] w-full mt-10 font-bold md:px-0 px-8 text-[20px]">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
        <Link to="/download" className="relative"><button className= " items-center bg-[#800080] text-center shadow-lg shadow-black-500 text-white lg:w-[377px] w-[270px]  h-[54px] border-yellow rounded-[50px] lg:text-[22px] text-lg font-semibold font-font1  mt-14 lg:mb-0 mb-10">Purchase Book At Amazon</button></Link>
       </div>
    </div>
  )
}

export default QuickStep