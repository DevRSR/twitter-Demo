import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb,faUser,faRectangleList } from '@fortawesome/free-regular-svg-icons';
import { faCommenting, faQrcode } from '@fortawesome/free-solid-svg-icons';
import img from '.././components/th-22.webp'

const SideBar = () => {
  
  function handleBar () {
    const bar = document.querySelector('#SideBar');
    bar.classList.toggle('hidden');
    const bottom = document.querySelector('#bottom');
    const Tweet = document.querySelector('#Tweet');
    bottom.classList.toggle('translate-x-[85%]')
    Tweet.classList.toggle('translate-x-[85%]')
  }
  
  return(
    <div className='relative w-full h-screen'>
     <div className='absolute w-3/4 h-full bg-white px-4 py-2'>
      <div className='flex items-center justify-between pb-4'>
       <div className='flex flex-col'>
        <img onClick={handleBar} className='w-8 h-8 mb-3 rounded-full' src={ img } alt='user' />
        <strong className='font-bold text-md'>Dev RSR</strong>
        <p className='text-gray-500'>@devrsr_love</p>
       </div>
       <div className='flex'>
        <div className='flex mr-2'>
         <img src='' alt='' />
         <img src='' alt='' />
        </div>
        <img src='' alt='' />
       </div>
      </div>
      <div className='flex'>
       <div className='flex items-center mr-6'>
        <p className='font-bold text-md pr-1'>150</p>
        <small className='text-sm text-gray-500'>Following</small>
       </div>
       <div className='flex items-center'>
        <p className='font-bold text-md pr-1'>110</p>
        <small className='text-sm text-gray-500'>Followers</small>
       </div>
      </div>
      <div className='flex flex-col py-4 border-b border-gray-200'>
       <a className='flex items-center mb-4' href='/profile'>
        <FontAwesomeIcon className='text-gray-500 mr-4' icon={ faUser } />
        <p>Profile</p>
       </a>
       <a className='flex items-center mb-4' href='/list'>
        <FontAwesomeIcon className='text-gray-500 mr-4' icon={ faRectangleList } />
        <p>Lists</p>
       </a>
       <a className='flex items-center mb-4' href='/'>
        <FontAwesomeIcon className='text-gray-500 mr-4' icon={ faCommenting } />
        <p>Topics</p>
       </a>
       <a className='flex items-center mb-4' href='/bookmark'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className='fill-gray-500 mr-4'> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/> </svg>
        <p>Bookmarks</p>
       </a>
       <a className='flex items-center mb-4' href='/moment'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className='fill-gray-500 mr-4'> <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/> </svg>
        <p>Moment</p>
       </a>
      </div>
      <div className='flex flex-col mt-4'>
       <a className='mb-4' href='/privacy'>Settings and privacy</a>
       <a href='/helpcenter'>Help Center</a>
      </div>
      <div className='fixed bottom-0 left-0 w-3/4 px-4 py-4'>
       <div className='flex items-center justify-between'>
        <FontAwesomeIcon className='text-blue-500' icon={ faLightbulb } />
        <FontAwesomeIcon className='text-blue-500' icon={ faQrcode } />
       </div>
      </div>
     </div>
    </div>
    )
}
export default SideBar;