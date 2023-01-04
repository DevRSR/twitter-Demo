import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import img from '../../components/th-22.webp';


const Message = ({ setMessage, setBell, setSearch }) => {
  
  useEffect(() => {
    setMessage(true)
    setBell(false)
    setSearch(false)
  })
  return (
    <div className='mt-12 h-screen'>
     <div className='py-4 border-b border-gray-100'>
      <div className='flex items-center bg-gray-100 mx-4 px-2 py-1 rounded-full text-gray-700'>
       <FontAwesomeIcon  icon={ faSearch } />
       <input type='text' className='bg-gray-100 basis-3/4 ml-2 focus:outline-none' placeholder='Search for people and groups' />
      </div>
     </div>
     <div>
      <div className='p-4 border-b border-gray-100'>
       <div className='flex justify-between items-start'>
        <img className='w-6 h-6 rounded-full' src={ img } alt='pics' />
        <div className='flex basis-[90%] flex-col'>
         <div className='flex justify-between'>
          <p><strong>AzizDjan</strong> <small className='text-gray-400'>@A_AzizDjan</small></p>
          <p className='text-gray-400'>12/12/19</p>
         </div>
         <p className='text-gray-400'>You: you are welcome AzizDjan!</p>
       </div>
      </div>
     </div>
      <div className='p-4 border-b border-gray-100'>
       <div className='flex justify-between items-start'>
        <img className='w-6 h-6 rounded-full' src={ img } alt='pics' />
        <div className='flex basis-[90%] flex-col'>
         <div className='flex justify-between'>
          <p><strong>AzizDjan</strong> <small className='text-gray-400'>@A_AzizDjan</small></p>
          <p className='text-gray-400'>12/12/19</p>
         </div>
         <p className='text-gray-400'>You: you are welcome AzizDjan!</p>
       </div>
      </div>
     </div>
      <div className='p-4 border-b border-gray-100'>
       <div className='flex justify-between items-start'>
        <img className='w-6 h-6 rounded-full' src={ img } alt='pics' />
        <div className='flex basis-[90%] flex-col'>
         <div className='flex justify-between'>
          <p><strong>AzizDjan</strong> <small className='text-gray-400'>@A_AzizDjan</small></p>
          <p className='text-gray-400'>12/12/19</p>
         </div>
         <p className='text-gray-400'>You: you are welcome AzizDjan!</p>
       </div>
      </div>
     </div>
    </div>
  </div>
   )
}

export default Message;