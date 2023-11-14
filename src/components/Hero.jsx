import Game from '../assets/game.png';
import Maskup from '../assets/maskgroup.svg';
import Stars from '../assets/stars.svg';
import { Link } from "react-router-dom";

const Hero = () => {

  return (
    <div className="flex justify-between bg-gradient-to-b from-[#310080] to-[#ae82f4] lg:px-20 px-8 py-8 font-font1 " >
          <div className="text-white relative  pt-5">
            <h1 className="lg:text-[65px] text-[45px]  font-bold lg:w-[570px] w-full "><i>Have Fun With Noodle Pair Game</i></h1>
            <p className="text-xl  lg:w-[513px] w-full ">All age activity game, fun and educational. specializes in basic association skills, basic shape identification and awareness, vocabulary learning, word affiliation, alphabet knowledge tool, animal relationships and recognition. all ages especially beneficial for children, older adults and neurological diseases or disorder. </p>
            <div className="flex lg:flex-row flex-col  gap-[190px] items-center ">
             <div className="flex lg:flex-row flex-col items-center gap-0 relative">
            <Link to="/download" className=" lg:mt-0 mt-10"> <button className="bg-[#800080] relative text-white  w-[220px] h-[54px] border-yellow rounded-lg text-[22px] font-semibold font-font1">Download Now </button></Link>
              <img src={Maskup} alt="" className=" w-[268px] items-center absolute -top-2 left-[200px]" />
             </div>
             <div>
              <div className="  mt-20 flex  lg:flex-row flex-col items-center text-[24px] gap-1"><span>5.0 App Review</span><img src={Stars} alt="" /></div>
              <p className="text-xl">(Over 1million downloads)</p>
             </div>
          </div>
        </div>
        <img src={Game} alt="" />
        </div>
  )
}

export default Hero