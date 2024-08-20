"use client"
import { useState, useRef, useEffect } from "react"
import Dropdown from "./Dropdown";
import DropdownSell from "./DropdownSell";
import DropdownRent from "./DropdownRent";

function Nav() {
  
  {/** Define for dropdown **/}
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSell, setIsOpenSell] = useState(false);
  const [isOpenRent, setIsOpenRent] = useState(false);


  const handleMouseEnter = (setOpenFunction) => {
    setOpenFunction(true);
  }

  const handleMouseLeave = (setOpenFunction) => {
    setOpenFunction(false);
  }

  {/** NAV Animation**/}
  const lastScroll = useRef(0)
  const timeout = useRef<NodeJS.Timeout | null>(null)       


  return (
    <div className="bg-white w-full h-20 sticky top-0 left-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">ESTATE ASELI</h1>
            <ul className="flex gap-8 uppercase">
                <li 
                  onMouseEnter={() => handleMouseEnter(setIsOpen)} 
                  onMouseLeave={() => handleMouseLeave(setIsOpen)}
                >
                  <a href="#" className="hover:text-blue-600 duration-200">BUY</a>
                  <Dropdown isOpen={isOpen} />
                </li>
                <li 
                  onMouseEnter={() => handleMouseEnter(setIsOpenSell)} 
                  onMouseLeave={() => handleMouseLeave(setIsOpenSell)}
                >
                  <a href="#" className="hover:text-blue-600 duration-200">SELL</a>
                  <DropdownSell isOpenSell={isOpenSell} />
                </li>
                <li 
                  onMouseEnter={() => handleMouseEnter(setIsOpenRent)} 
                  onMouseLeave={() => handleMouseLeave(setIsOpenRent)}
                >
                  <a href="#" className="hover:text-blue-600 duration-200">RENT</a>
                  <DropdownRent isOpenRent={isOpenRent} />
                </li>
                <li className="NavBarLi"><a href="#">CONTACT</a></li>
                <li className="NavBarLi"><a href="#">BLOG</a></li>
                <li className="NavBarLi"><a href="#">ABOUT</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav
