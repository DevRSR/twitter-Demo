import { useEffect } from 'react';


const List = ({ setHidHeader }) => {
  
  useEffect(() => {
    setHidHeader(true)
  })
  
  return(
    <div className='h-screen'>
     <div className='flex flex-col items-start'>
      <div className='flex justify-between w-1/2 mb-2 mt-3'>
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="ml-4 fill-[#4C9EEB]" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
       <h4 className='font-extrabold'>Lists</h4>
      </div>
      <div className='flex w-screen'>
       <div className='basis-1/2 text-center text-[#4C9EEB] pb-2 border-b-2 border-[#4C9EEB]'>Subscribed to
       </div>
       <div className='basis-1/2 text-center text-gray-600 pb-2'>Member of
       </div>
      </div>
     </div>
     <div className='flex flex-col bg-[#E7ECF0] items-center justify-center px-16 h-3/4'>
      <div className='flex flex-col items-center text-center'>
       <h2 className='font-extrabold'>You haven't created or Subscribed to any lists</h2>
       <small className='py-3 text-gray-400'>When you do, it will show up here.</small>
       <a className='px-6 py-1 rounded-full bg-[#4C9EEB] text-white' href=''>Create a list</a>
      </div>
     </div>
    </div>
    )
}
export default List;