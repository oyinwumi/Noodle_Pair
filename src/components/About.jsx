import { Link } from "react-router-dom";
import Planet from "../assets/planet.png";

const About = () => {
  return (
    <div className="lg:px-20 px-8 pt-8 py-20 text-[#252528] bg-[#FFF]">
    <h3 className="lg:text-center font-font1 lg:text-3xl text-2xl font-normal w-full pt-10 ">Learn More About Us And Our Mobile Application</h3>
    <div className="flex lg:flex-row flex-col  w-full mt-10">
       <div className="lg:w-[60%] w-full ">
       <p className="  lg:text-xl text-[16px] font-font1 font-normal w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum id ex ullamcorper pellentesque. In ultricies nisi vel lacinia vulputate. Etiam at accumsan leo. Fusce rutrum dapibus nunc, ac mollis tortor mollis sed. Proin et orci porta, tempus lorem quis, convallis arcu. Nullam tincidunt nisi quis urna cursus, ut suscipit odio rhoncus. Vivamus rutrum, mi sit amet sagittis dapibus, ante ligula pulvinar enim, sed lacinia massa ante ut leo. Maecenas vel elit mi. Cras at pharetra tellus, at placerat nunc. Etiam mattis metus eget libero malesuada pretium. Nullam fermentum at ex id imperd Fusce bibendum pulvinar magna dapibus sollicitudin. Pellentesque luctus lectus sed mi suscipit fermentum. Phasellus ac felis sem. Phasellus nec condimentum purus, vel elementum tortor. Sed facilisis urna nec luctus suscipit. In pulvinar erat in magna volutpat dapibus et a neque. Mauris massa eros, finibus eget lorem quis, interdum imperdiet orci. In feugiat arcu vitae vulputate interdum. Maecenas sem lectus, mattis eget efficitur eget, vehicula vitae nunc. Curabitur quis nisl dolor. Praesent sem nulla, ullamcorper fringilla ante  vehicula vitae nunc. Curabitur quis nisl dolor. Praesent sem nulla, ullamcorper fringilla ante. </p>
       <Link to="/download">  <button className= "bg-[#800080] text-center shadow-lg shadow-[#4c4848] text-[#FFFFFF] w-[224px] h-[56px] border-[#800080] rounded-lg text-[22px] font-semibold font-font1 items-center  mt-10">Download Now </button></Link>
       </div>
        <img src={Planet} alt="" className="lg:w-[40%] w-full h-[430px]  lg:ml-14 ml-0 object-contain" />
    </div>
</div>
  )
}

export default About