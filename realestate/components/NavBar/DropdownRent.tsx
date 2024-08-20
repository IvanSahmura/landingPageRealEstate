"use client"
 
import { CSSTransition } from "react-transition-group"

interface DropDownProps{
    isOpenRent:boolean
}

const DropdownRent: React.FC<DropDownProps> = ({isOpenRent}) => {

  return (
      <CSSTransition in={isOpenRent} timeout={200} classNames="slide" unmountOnExit>        
        <ul className="absolute  text-xs mt-2 bg-white shadow-lg p-5 space-y-5">
            <li><a href="http://">PROPERTY TYPE</a></li>
            <li><a href="http://">PRICE RANGE</a></li>
            <li><a href="http://">LOCATION / NEIGHBORHOOD</a></li>
            <li><a href="http://">PET FRIENDLY PROPERTIES</a></li>
        </ul>
      </CSSTransition>
  )
}

export default DropdownRent