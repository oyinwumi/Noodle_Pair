
import { Link } from "react-router-dom";
import Books from  "../assets/books.png";
import Heart from "../assets/heart.png";
import Star from "../assets/stars.svg";


const Purchase = () => {
  return (
    <div className="   py-10 w-full ">
        <h2 className="text-[30px] font-font1 font-normal mt-10  mb-5 text-center text-[#252528]">Book From Noodle Pair Owner</h2>
       <div className=" flex lg:flex-row flex-col pb-14 gap-8  mx-[25%]">
          <div className="">
            <img src={Heart} alt="" />
          </div>
          <div className="">
             <h4 className="text-3xl mb-4 text-[#110F0F]">Name: a heart so fierce and broken</h4>
             <h6 className="text-xl opacity-60">Author: by brigid kemmere</h6>
             <div className="flex gap-2 mt-2">
                <span>Rate</span>
                <img src={Star} alt="" />
                <span>1,988,288 sold copies</span>
             </div>
             <p className="opacity-50 mt-4 lg:w-[400px] pb-10">Book Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique  consectetur adipiscing elit. Purus morbi eleifend enim, tristique.</p>
             <Link to="/download" className=" "> <button className="bg-[#800080] relative text-white shadow-lg shadow-[#4c4848]  w-[261px] h-[54px]  rounded-lg text-[22px] font-semibold font-font1">Purchase Now </button></Link>

          </div>
       </div>
       <div className="relative w-full h-[350px]  " >
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

export default Purchase;