"use client"
interface DropDownProps{
    isOpen:boolean
}

const Dropdown: React.FC<DropDownProps> = ({isOpen}) => {

  return (
    <>
        {isOpen&&(
        <ul className="absolute flex flex-row items-start mt-2 bg-white shadow-lg p-10 space-x-5">
            <li><a href="http://">OPTION 1</a></li>
            <li><a href="http://">OPTION 2</a></li>
            <li><a href="http://">OPTION 2</a></li>
            <li><a href="http://">OPTION 2</a></li>
        </ul>
        )}      
    </>
  )
}

export default Dropdown