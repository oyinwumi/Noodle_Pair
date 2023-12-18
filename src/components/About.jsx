import { Link } from "react-router-dom";
import Planet from "../assets/planet.png";

const About = () => {
  return (
    <div className="lg:px-20 px-8 pt-8 py-20 text-[#252528] bg-[#FFF]">
    <h3 className="lg:text-center font-font1 lg:text-3xl text-2xl font-normal w-full pt-10 ">Learn More About Us And Our Mobile Application</h3>
    <div className="flex lg:flex-row flex-col  w-full mt-10">
       <div className="lg:w-[60%] w-full ">
       <p className="  lg:text-xl text-[16px] font-font1 font-normal w-full">Welcome to Noodle Pair: The Ultimate Pair Matching Experience! Discover a world of learning and fun with Noodle Pair, the best matching game for all ages. Our app is designed to boost association skills, shape identification, vocabulary, word affiliation, alphabet knowledge, and animal recognition. Watch our video to get a sneak peek into the excitement and educational value that Noodle Pair brings. Join us on a journey where learning meets enjoyment. Download Noodle Pair now and let the pairing adventure begin! About Noodle Pair Video: Watch our video to get a sneak peek into the excitement and educational value that Noodle Pair brings. Join us on a journey where learning meets enjoyment. Download Noodle Pair now and let the pairing adventure begin!</p>
       <Link to="/download" className="flex lg:justify-start justify-center">  <button className= "bg-[#800080] text-center shadow-lg shadow-[#4c4848] text-[#FFFFFF] w-[224px] h-[56px] border-[#800080] rounded-lg text-[22px] font-semibold font-font1 items-center  mt-10">Download Now </button></Link>
       </div>
        <img src={Planet} alt="" className="lg:w-[40%] w-full h-[430px]  lg:ml-14 ml-0 object-contain" />
    </div>
</div>
  )
}

export default About