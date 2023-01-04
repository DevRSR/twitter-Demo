import { useState,useEffect } from 'react'
import Tweet from '../Home/Tweet';
import img from '../images/chat.svg'
import img2 from '../images/four-pointed-star.png'

const Notification = ({ setBell, setSearch }) => {
  
  const [all,setAll] = useState(true);
  const [mentions,setMentions] = useState(false);
  
  
  useEffect(() => {
    setSearch(false);
    setBell(true)
  })
   
   function handleAll (e) {
    const mention = document.querySelector(".mention");
     e.target.classList.add('border-b-2');
     e.target.classList.add('border-[#4C9EEB]');
     mention.classList.remove('border-b-2');
     mention.classList.remove('border-[#4C9EEB]');
     setAll(true)
     setMentions(false)
   }
   
   function handleMention (e) {
     const all = document.querySelector('.all')
     e.target.classList.add('border-b-2');
     e.target.classList.add('border-[#4C9EEB]');
     all.classList.remove('border-b-2');
     all.classList.remove('border-[#4C9EEB]');
     setAll(false)
     setMentions(true)
   }
   
  return(
    
    <div className='mt-12 h-screen'>
     <div className='flex justify-between'>
      <div className='pb-1 pt-2 border-b border-gray-200 border-b-2 border-[#4C9EEB] text-center basis-[50%] all' onClick={ handleAll }>All</div>
      <div className='pb-1 pt-2 text-center mention basis-[50%] border-b border-gray-200' onClick={ handleMention }>Mentions</div>
     </div>
     { all && <div>
      <div className='flex items-start py-4 pl-8 pr-4 border-b border-gray-200'>
       <img  src={ img2 } alt='' className='w-4 mr-2' />
       <div className='flex flex-col'>
        <div className='flex items-center justify-between pb-2'>
         <img src={ img } alt='pics' />
         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className='fill-gray-400' viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
        </div>
        <p className='text-sm text-gray-600'>In Case you missed Saad Druster's Tweet  are you using wordpress and migrating to JAMstack? I wrote a Case study of how Smashing Magazine moved to JAMstack and saw a great performance improvements and better security
        </p>
       </div>
     </div>
    </div> }
    
    { mentions && <div>
      <Tweet />
    </div> }
   </div>
  )
}

export default Notification;