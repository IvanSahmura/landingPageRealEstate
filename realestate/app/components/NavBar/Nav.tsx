"use client"
import { useState, useEffect } from "react"

function Nav() {
    


  return (
    <div className="w-full h-20 ">
        <div className="max-w-screen-xl h-full mx-auto px-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold ">ESTATE ASELI</h1>
                <ul className="flex gap-8 uppercase">
                    <li className="NavBarLi"><a href="#">BUY</a></li>
                    <li className="NavBarLi"><a href="#">SELL</a></li>
                    <li className="NavBarLi"><a href="#">RENT</a></li>
                    <li className="NavBarLi"><a href="#">CONTACT</a></li>
                    <li className="NavBarLi"><a href="#">BLOG</a></li>
                    <li className="NavBarLi"><a href="#">ABOUT</a></li>
                </ul>
        </div>
    </div>
  )
}

export default Nav