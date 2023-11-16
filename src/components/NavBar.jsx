import  { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/noodlelogo.svg'

const NavBar = () => {
  const [open, setOpen] = useState(false);


  return (
    <nav  className={`  bg-[#310080]    w-full h-[88px]  flex justify-between lg:px-20 px-8 py-12 text-[#FFFFFF] text-xl items-center border-b-0`}>
        <div className='py-4 '>
         <Link to="/"> <img src={Logo} alt={Logo} className='md:w-[233px] md:h-[44px] w-[233px] h-[44px] items-center  ' />  </Link>
        </div>
        <div  onClick={() => setOpen(!open)}className=' text-white text-4xl  font-light ml-2 lg:hidden'>
           <ion-icon name={open ? "close" : "menu"} ></ion-icon>
        </div>
        <ul  className={` flex lg:flex-row md:flex-col flex-col bg-[#310080]  items-center justify-center px-4 py-4 md:z-50 z-50 lg:static  md:absolute absolute  right-0 lg:w-auto md:w-full w-full   text-[22px]
         md:pb-0 pb-12   md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}>
           <Link to="/" > <li className=' font-normal px-4 lg:pb-0 md:pb-6 pb-6 hover:font-bold  text-center '>Home</li></Link>
           <Link to=""> <li className='font-normal px-4 lg:pb-0 md:pb-6 pb-6 hover:font-bold  text-center' >About Us</li></Link>
           <Link to="/purchase" > <li className='font-normal px-4 lg:pb-0 md:pb-6 pb-6 hover:font-bold  text-center'>Our Book</li></Link>
           <Link to="/download"> <button className='font-normal px-4   border border-[#800080] lg:w-[242px] w-[200px] lg:text-[22px] text-[16px] lg:h-[54px] h-[46px]  bg-[#800080] rounded-lg lg:ml-10 ml-0  text-center'>Get The App Now</button></Link>
        </ul>
    </nav>
  )
}

export default NavBar