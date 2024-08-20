"use client"
 
import { CSSTransition } from "react-transition-group"

interface DropDownProps{
    isOpen:boolean
}

const Dropdown: React.FC<DropDownProps> = ({isOpen}) => {

  return (
      <CSSTransition in={isOpen} timeout={200} classNames="slide" unmountOnExit>        
        <ul className="absolute text-xs mt-2 bg-white shadow-lg p-5 space-y-5">
            <li><a href="http://">PROPERTY TYPE</a></li>
            <li><a href="http://">PRICE RANGE</a></li>
            <li><a href="http://">LOCATION / NEIGHBORHOOD</a></li>
            <li><a href="http://">NUMBER OF BEDROOMS / BATHROOMS</a></li>
            <li><a href="http://">NEW VS. RESALE</a></li>
        </ul>
      </CSSTransition>
  )
}

export default Dropdown