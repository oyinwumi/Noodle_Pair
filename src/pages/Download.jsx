import { Link } from "react-router-dom";
import Android from "../assets/androids.svg";
import Iphone from "../assets/iphones.svg";
import Books from  "../assets/books.png";



const Download = () => {
  return (
    <div className="text-center text-black  lg:py-10 py-0 w-full">
        <h2 className="lg:text-[50px] text-[30px] font-font1 font-bold mt-10"><i>Download Noodle Pair</i></h2>
        <p className="font-font1 text-xl font-normal mt-3">Choose from the option below to download Noodle Pair mobile application.</p>
       <div className="my-16  gap-10 flex flex-col justify-center">
        <div className="relative">
        <a  href="*" className=" "> <button className="bg-[#800080] relative text-white shadow-lg shadow-[#4c4848]  w-[355px] h-[60px]  rounded-lg text-[20px] font-semibold font-font1 px-5">Download For Android </button></a>
          <img src={Android} alt="" className=" absolute lg:top-4 top-4 lg:left-[42%] left-16" />
        </div>
        <div className="relative">
        <a  href="*" className=" "> <button className="bg-[#800080] relative text-white shadow-lg shadow-[#4c4848]  w-[355px] h-[60px]  rounded-lg text-[20px] font-semibold font-font1 px-5">Download For Iphone </button></a>
          <img src={Iphone} alt="" className="absolute lg:top-4 top-4 lg:left-[42%] left-16" />
        </div>

       </div>
       <div className="relative w-full h-[400px]  " >
       <img src={Books} alt="" className=" absolute w-full h-full  bg-cover mix-blend-overlay"/>
       <div className="text-white text-center ">
        <h3 className="font-font2 font-bold lg:text-[50px] text-2xl pt-16">Take A Quick Step</h3>
        <p className="font-font1 mx-auto lg:w-[856px] w-full mt-10 font-semibold md:px-0 px-8 lg:text-[16px] text-sm">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
        <Link to="/purchase" className="relative"><button className= " items-center bg-[#800080] text-center shadow-lg shadow-black-500 text-white lg:w-[377px] w-[230px] lg:h-[54px] h-[46px] border-yellow rounded-[50px] lg:text-[22px] text-sm font-semibold font-font1  lg:mt-14 mt-10 lg:mb-0 mb-10">Purchase Book At Amazon</button></Link>
       </div>
    </div>
    </div>
  )
}

export default Download