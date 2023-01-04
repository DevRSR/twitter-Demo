import { useEffect } from 'react'


const MessageSetting = ({ setHidHeader }) => {
  
  useEffect(() => {
    setHidHeader(true)
  })
  
 function selected (e) {
   e.target.parentElement.classList.toggle('toggleLight')
   e.target.classList.toggle('right');
 }
  
   return(
    <div className='h-screen bg-[#E7ECF0]'> 
     <div className='flex items-center justify-between bg-white px-4 py-2'>
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="fill-[#4C9EEB]" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
       <h4 className='font-extrabold'>Message setting</h4>
       <a href='/' className='text-[#4C9EEB]'>Done</a>
      </div>
      <div className='bg-[#E7ECF0] px-4 py-2 text-gray-700 font-lg font-extrabold text-left'>Privacy</div>
      <div className='bg-white p-4'>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Receiving messages from anyone</p>
          <div className="toggle">
           <div onClick={selected} className='select'></div>
          </div>
        </div>
        <div>
         <small className='text-gray-400 text-left font-sm'>You will be able to Receive message request from anyone on twitter, even if you don't follow them. <a className='text-[#4C9EEB]' href='/'>Learn more</a></small>
        </div>
       </div>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Quality filter</p>
          <div className="toggle">
           <div onClick={selected} className='select'></div>
          </div>
        </div>
        <div>
         <small className='text-gray-400 text-left font-sm'>Filter lower quality messages from your direct message request. <a className='text-[#4C9EEB]' href='/'>Learn more</a></small>
        </div>
       </div>
       <div className='border-b border-gray-200 pb-2'>
        <div className='flex justify-between items-center py-2'>
         <p className='font-bold'>Show read receipts</p>
          <div className="toggle">
           <div onClick={selected} className='select'></div>
          </div>
        </div>
        <div>
         <small className='text-gray-400 text-left font-sm'>When someone send you a message people in the conversation will know when you've seen it. if you turn off this setting you would be able to see read receipt from others.  <a className='text-[#4C9EEB]' href='/'>Learn more</a></small>
        </div>
       </div>
      </div>
    </div>
    )
}

export default MessageSetting;