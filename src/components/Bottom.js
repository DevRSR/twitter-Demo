import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHouse,faSearch } from "@fortawesome/free-solid-svg-icons";


const Bottom = () => {
  

  return (
     <div id='bottom' className='fixed bottom-0 left-0 w-screen border-t border-gray-200 bg-white'>
      <div className='flex justify-between items-center h-14 px-4 bg-white'>
       <a href='/' >
        <FontAwesomeIcon  className=' hover:text-blue-500'  icon={ faHouse } /></a>
       <a href='/search' >
        <FontAwesomeIcon  className=' hover:text-blue-500' icon={ faSearch } />
       </a>
       <a href='/notification'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='fill-black' viewBox="0 0 16 16"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='hidden fill-blue-500' viewBox="0 0 16 16"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/> </svg>
       </a>
       <a href='/messages'>
        <FontAwesomeIcon className=' hover:text-blue-500' icon={ faEnvelope } />
       </a>
      </div>
     </div>
    )
}

export default Bottom;