
import { Link } from "react-router-dom";
import Books from  "../assets/books.png";
import NoodleBook from "../assets/noodlebook.png";
import Star from "../assets/stars.svg";


const Purchase = () => {
  return (
    <div className=" py-10 w-full h-full ">
        <h2 className=" lg:px-0 px-8  text-[30px] font-font1 font-normal mt-10  mb-5 text-center text-[#252528]">Book From Noodle Pair Owner</h2>
       <div className="lg:px-0 px-8  flex lg:flex-row flex-col pb-14 gap-8  lg:mx-[25%]">
          <div className="">
            <img src={NoodleBook} alt="" className="w-full h-full " />
          </div>
          <div className="">
             <h4 className="text-3xl mb-4 text-[#110F0F] capitalize">Name: Noodle Pair</h4>
             <h6 className="text-xl opacity-60">Author: by  I.M.</h6>
             <div className="flex gap-2 mt-2">
                <span>Rate</span>
                <img src={Star} alt="" />
                <span>1,988,288 sold copies</span>
             </div>
             <p className="opacity-50 mt-4 lg:w-[400px] pb-10">Book Description: Introducing Noodle Pair, an interactive game workbook designed to enhance basic association skills, shape identification, vocabulary learning, word association, alphabet knowledge, and animal recognition. This engaging workbook is suitable for children, older adults, and individuals with neurological diseases and disorders. With a variety of objects and themes, Noodle Pair provides endless opportunities for fun and learning for individuals of all ages. Thank you for choosing Noodle Pair as your learning companion.</p>
             <Link to="/" className=" flex lg:justify-start justify-center "> <button className="bg-[#800080] relative text-white shadow-lg shadow-[#4c4848]  w-[261px] h-[54px]  rounded-lg text-[22px] font-semibold font-font1">Purchase Now </button></Link>

          </div>
       </div>
       <div className="relative w-full lg:h-[380px] h-[470px]  lg:pb-0 p" >
       <img src={Books} alt="" className=" absolute w-full h-full  bg-cover mix-blend-overlay"/>
       <div className="text-white text-center ">
        <h3 className="font-font2 font-bold lg:text-[50px] text-2xl pt-16">Take A Quick Step</h3>
        <p className="font-font1 mx-auto lg:w-[856px] w-full mt-10 font-semibold md:px-0 px-8 lg:text-[16px] text-sm">This engaging workbook is suitable for children, older adults, and individuals with neurological diseases and disorders. With a variety of objects and themes, Noodle Pair provides endless opportunities for fun and learning for individuals of all ages  </p>
        <Link to="" className="relative "><button className= " items-center bg-[#800080] text-center shadow-lg shadow-black-500 text-white lg:w-[377px] w-[230px] lg:h-[54px] h-[46px] rounded-[50px] lg:text-[22px] text-sm font-semibold font-font1  lg:mt-14 mt-10 lg:mb-0 mb-10">Purchase Now</button></Link>
       </div>
    </div>
    </div>
  )
}

export default Purchase;