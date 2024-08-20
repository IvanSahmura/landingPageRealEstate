"use client"
 
import { CSSTransition } from "react-transition-group"

interface DropDownProps{
    isOpen:boolean
}

const Dropdown: React.FC<DropDownProps> = ({isOpen}) => {

  return (
      <CSSTransition in={isOpen} timeout={200} classNames="slide" unmountOnExit>        
        <ul className="absolute flex flex-row items-start mt-2 bg-white shadow-lg p-10 space-x-5">
            <li><a href="http://">OPTION 1</a></li>
            <li><a href="http://">OPTION 2</a></li>
            <li><a href="http://">OPTION 2</a></li>
            <li><a href="http://">OPTION 2</a></li>
        </ul>
      </CSSTransition>
  )
}

export default Dropdown