import { Link, useLocation } from "react-router-dom";
import { IoMdNotifications } from 'react-icons/io'
import { BiMenuAltRight } from "react-icons/bi";
import { MdBolt } from "react-icons/md";
//  import { useState } from "react";
// import Sidebar from "../common/SideBar";

//const LinksArray = ['watch', 'movies', 'extras', 'life streams', 'pay it forward', 'community']
const logedInLinksArray = []
function Header({toggleSidebar}) {
  
  //const logedin = true
  const location = useLocation()


  return LogedInHeader({location, toggleSidebar, })


}

export default Header;

// eslint-disable-next-line react/prop-types
function LogedInHeader({ toggleSidebar}) {
  return (
    <div className="w-full flex bg-transparent p-4 items-center justify-between px-3 md:px-10 fixed left-0 top-0   bg-glass z-50">
      
      <div className="flex gap-[3rem] items-center w-full justify-between ">
        <Link href="/feed" className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 flex bn"><MdBolt color="Green" size={30} />NF</Link>
        <div className="flex gap-10 items-center">
          {
            logedInLinksArray.map((link, i) => (
              <Link key={i} to={`/${link}`} className={`text-sm capitalize py-2   `}>{link}</Link>
            ))
          }

          <button onClick={()=>toggleSidebar()} className={`capitalize py-2`}><BiMenuAltRight size={30} /></button>
          
        </div>
      </div>


    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function notLogedInHeader(location) {
  return (
    <div className="w-full flex bg-[#CBC5B6] p-4 items-center justify-between px-10">
      <div className="flex gap-[3rem] items-center">
        <a href="/" className="text-2xl font-bold">SPIRACY</a>
      </div>

      <div className="flex gap-2 items-center">
        <Link to="/notifications" className="">
          <IoMdNotifications className="text-3xl text-[#EB440F]" />
        </Link>
        <Link to="/signup" className="rounded-full p-3 bg-[#EB440F]">Signup</Link>
      </div>
    </div>
  );
}