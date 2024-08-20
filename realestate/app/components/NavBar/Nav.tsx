"use client"
import { useState, useEffect, useRef } from "react"
import Dropdown from "./Dropdown";
import DropdownSell from "./DropdownSell";
import DropdownRent from "./DropdownRent";

function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSell, setIsOpenSell] = useState(false);
  const [isOpenRent, setIsOpenRent] = useState(false);

  const lastScroll = useRef(0)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const toggleDrop = () => {
    if (isOpenSell) setIsOpenSell(false)
    if (isOpenRent) setIsOpenRent(false)
    setIsOpen(!isOpen)
  }

  const toggleDropSell = () => {
    if (isOpen) setIsOpen(false)
    if (isOpenRent) setIsOpenRent(false)
    setIsOpenSell(!isOpenSell)
  }

  const toggleDropRent = () => {
    if (isOpen) setIsOpen(false)
    if (isOpenSell) setIsOpenSell(false)
    setIsOpenRent(!isOpenRent)
  }
  
  return (
    <div className="bg-white w-full h-20 sticky top-0 left-0 z-50  ">
        <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between ">
            <h1 className="text-2xl font-bold ">ESTATE ASELI</h1>
                <ul className="flex gap-8 uppercase">
                    <li>
                      <a href="#" className="hover:text-blue-600 duration-200" onClick={toggleDrop}>BUY</a>
                      <Dropdown isOpen={isOpen} />
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 duration-200" onClick={toggleDropSell}>SELL</a>
                      <DropdownSell isOpenSell={isOpenSell}/>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-600 duration-200" onClick={toggleDropRent}>RENT</a>
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