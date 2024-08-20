"use client"
 
import { CSSTransition } from "react-transition-group"

interface DropDownProps{
    isOpenSell:boolean
}

const DropdownSell: React.FC<DropDownProps> = ({isOpenSell}) => {

  return (
      <CSSTransition in={isOpenSell} timeout={200} classNames="slide" unmountOnExit>        
        <ul className="absolute  text-xs mt-2 bg-white shadow-lg p-5 space-y-5">
            <li><a href="http://">PROPERTY VALUATION TOOL</a></li>
            <li><a href="http://">SELLING PROCESS GUIDE</a></li>
            <li><a href="http://">FIND AN AGENT</a></li>
            <li><a href="http://">MARKET TRENDS</a></li>
            <li><a href="http://">TIPS FOR HOME SELLERS</a></li>
        </ul>
      </CSSTransition>
  )
}

export default DropdownSell