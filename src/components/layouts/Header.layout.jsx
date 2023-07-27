import { Link, useLocation } from "react-router-dom";
import { IoMdNotifications } from 'react-icons/io'



function Header({toggleSidebar}) {
  
  //const logedin = true
  const location = useLocation()


  return LogedInHeader({location, toggleSidebar, })


}

export default Header;

// eslint-disable-next-line react/prop-types
function LogedInHeader() {
  return (
    <div className="w-full flex bg-transparent p-4 items-center justify-between px-3 md:px-10 fixed left-0 top-0   bg-glass z-50">
      
      <div className="flex gap-[3rem] items-center w-full justify-end ">
        <Link href="/feed" className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 flex bn"><div className='brand text-purple-600 flex gap-2 items-center justify-center'>
                <img src="https://www.zenithbank.com/media/2077/zenith-bank-logo_2.png" alt="" width={50} height={50}/>
            </div> </Link>
        
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