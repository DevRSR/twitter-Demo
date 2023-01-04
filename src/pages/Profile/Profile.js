
import img from '../../components/th-22.webp'

const Profile = () => {
  
  return (
    <div>
     <div className='relative'>
      <img className='w-full h-32' src={img} alt='pics' />
      <div className='absolute flex justify-center items-center top-8 left-4 w-8 h-8 rounded-full bg-black'>
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="fill-white" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>
       </div>
       <div className='absolute top-26 left-4 bg-white h-17 w-17 rounded-full'></div>
      </div>
     <div className='flex items-start justify-between px-4'>
      <div className='flex flex-col'>
       <img className='ml-1 mt-[-20px] w-14 h-14 rounded-full z-50' src={ img } alt='user' />
       <p className='font-md'>devRSR</p>
       <p className='text-gray-500 font-sm'>@devRSR_love</p>
      </div>
      <a className='py-1 px-4 rounded-full border border-blue-500 text-blue-500 mt-4' href='/profile'>Edit profile</a>
     </div>
     <div className='flex flex-col px-4 mt-1'>
      <p>Digital Goodies Team - web & Mobile UI/UX Development; Graphics; Illustration </p>
      <div className='flex items-center my-1'>
       <div className='flex items-center mr-6'>
        <svg width="16" height="16" viewBox="0 0 24 24" className='fill-gray-200' xmlns="http://www.w3.org/2000/svg"> <path d="M13.5442 10.4558C11.8385 8.75022 9.07316 8.75022 7.36753 10.4558L4.27922 13.5442C2.57359 15.2498 2.57359 18.0152 4.27922 19.7208C5.98485 21.4264 8.75021 21.4264 10.4558 19.7208L12 18.1766" className='stroke-gray-200' stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10.4558 13.5442C12.1614 15.2498 14.9268 15.2498 16.6324 13.5442L19.7207 10.4558C21.4264 8.75021 21.4264 5.98485 19.7207 4.27922C18.0151 2.57359 15.2497 2.57359 13.5441 4.27922L12 5.82338" className='stroke-gray-200' stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <a className='text-blue-500 text-sm pl-1' href='/profile'><small>devRSR.io</small></a>
       </div>
       <div className='flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='fill-gray-200' viewBox="0 0 16 16"> <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/> <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> </svg>
        <small className='text-gray-500 font-sm pl-1'>joined September 2018</small>
       </div>
      </div>
      <div className='flex'>
       <div className='flex items-center mr-6'>
        <p className='font-bold font-md pr-1'>150</p>
        <small className='font-sm text-gray-500'>Following</small>
       </div>
       <div className='flex items-center'>
        <p className='font-bold text-md pr-1'>110</p>
        <small className='font-sm text-gray-500'>Followers</small>
       </div>
      </div>
     </div>
     <div className='mt-2'>
      <div className='flex items-center'>
        <div className='font-bold text-gray-400 pb-1 text-center basis-1/5 border-b-2 border-blue-500'>Tweet</div>
        <div className='font-bold text-gray-400 pb-1 text-center basis-2/5 border-b border-gray-200'>Tweet & replies</div>
        <div className='font-bold text-gray-400 pb-1 text-center basis-1/5 border-b border-gray-200'>Media</div>
        <div className='font-bold text-gray-400 pb-1 text-center basis-1/5 border-b border-gray-200'>Likes</div>
      </div>
     </div>
    </div>
    )
}

export default Profile;