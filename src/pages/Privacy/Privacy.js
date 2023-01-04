import { useEffect } from 'react';

const Privacy = ({ setHidHeader }) => {

  useEffect(() => {
    setHidHeader(true)
  })
  
  return(
    <div className='h-screen bg-[#E7ECF0]'> 
     <div className='grid grid-cols-1 bg-white px-4 py-2 gap-16'>
       <h4 className='font-extrabold col-start-2 col-end-3'>Setting and privacy</h4>
       <a href='/' className='text-[#4C9EEB] col-start-3 col-end-4'>Done</a>
      </div>
      <div className='bg-[#E7ECF0] px-4 py-2 text-gray-500 font-lg font-extrabold text-left'>@DevRSR</div>
      <div className='bg-white p-4'>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Account</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="rotate-180" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </div>
       </div>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Privacy and Safety</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="rotate-180" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </div>
       </div>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Notifications</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="rotate-180" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </div>
       </div>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Content Preferences</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="rotate-180" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
        </div>
       </div>
      </div>
      <div className='bg-[#E7ECF0] px-4 py-2 text-gray-500 font-lg font-extrabold text-left'>General</div>
      <div className='bg-white p-4'>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Display and Sound</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="rotate-180" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </div>
       </div>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Data Usage</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="rotate-180" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </div>
       </div>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Accessibility</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="rotate-180" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
        </div>
       </div>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>About Twitter</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="rotate-180" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
        </div>
       </div>
       <small className="text-gray-400">General Setting affect all of your Twitter accounts on this device</small>
      </div>
    </div>
    )
}
export default Privacy;