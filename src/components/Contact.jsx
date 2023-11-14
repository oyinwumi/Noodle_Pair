import Call from "../assets/call.svg";
import Email from "../assets/emailicon.svg";
import Location from "../assets/location.svg";
import Game from "../assets/igame.svg";
import Tx from"../assets/tx.svg";
import Ig from "../assets/instag.svg";



const Contact = () => {
  return (
    <div className="text-white bg-white lg:px-20 px-8 py-8 ">
        <h3 className="text-3xl font-font1 text-center text-[#252528] pb-10">Get In Touch With Us Today!</h3>
        <div className="p-3 border-2 rounded-xl shadow-inner shadow-[#6e6969] flex  ">
           <div className="text-white bg-[#250325] pt-10 px-10 lg:h-[647px] lg:w-[500px] border rounded-lg font-font1">
               <h4 className="text-[28px] font-semibold ">Contact Information</h4>
               <p className="text-lg  mt-5 font-normal"> Get in touch with us and get quick response. We are dedicated and giving you the best user service. Thank You.</p>
               <div className="pt-14 font-normal font-font1 ">
                  <div className="flex items-center gap-6 pb-14">
                    <img src={Call} alt="" />
                    <p>+1012 3456 789</p>
                  </div>
                  <div className="flex items-center gap-6 pb-14">
                    <img src={Email} alt="" />
                    <p>demo@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-6 pb-14">
                    <img src={Location} alt="" />
                    <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                  </div>
               </div>
               <div className="flex gap-6 pt-16">
               <img src={Ig} alt="" />
               <img src={Tx} alt="" />
               <img src={Game} alt="" />

               </div>
           </div>
           
             <form action="" className="pt-10 px-20">
                <div className=" text-[#110F0F] flex gap-8 "> 
                    <div>
                        <label htmlFor="">First Name</label><br />
                        <input type="text" className="outline-none border-t-0 border-l-0 border-r-0 border-b-2 py-4 border-b-[#110F0F]  lg:w-[480px] w-full " />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label><br />
                        <input type="text" className="outline-none border-t-0 border-l-0 border-r-0 border-b-2 py-4 border-b-[#110F0F]  lg:w-[480px] w-full " />
                    </div>
                </div>
                <div className=" text-[#110F0F] flex gap-8 py-10 "> 
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input type="email" className="outline-none border-t-0 border-l-0 border-r-0 border-b-2 py-4 border-b-[#110F0F]  lg:w-[480px] w-full " />
                    </div>
                    <div>
                        <label htmlFor="">Phone Number</label><br />
                        <input type="text" className="outline-none border-t-0 border-l-0 border-r-0 border-b-2 py-4 border-b-[#110F0F]  lg:w-[480px] w-full " />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="">Description</label><br />
                    <textarea name="" id="" cols="30"  placeholder="Type here..." className="border  w-full h-[230px]  border-[#110F0F] rounded-lg p-4 outline-none text-[#110F0F]"></textarea>
                </div>
                <button className= "bg-[#800080] text-center shadow-lg shadow-[#4c4848] mt-5 text-[#FFFFFF] w-[224px] h-[56px] border-[#800080] rounded-lg text-[22px] font-semibold font-font1 items-center lg:mx-[40%] ">Send Message </button>
             </form>
           
        </div>
    </div>
  )
}

export default Contact