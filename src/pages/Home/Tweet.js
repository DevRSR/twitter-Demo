import { useState,useEffect } from 'react';
import img from '../../components/th-22.webp';


const Tweet = () => {
  
  const [like,setLike] = useState(true);
  useEffect(() => {},[like])
   
   function handleRetweet (e) { 
     let tweet = document.querySelector('#tweet');
     e.target.classList.toggle('fill-green-500');
     tweet.classList.toggle('hidden');
   }
   
  
  return (
     <div className='flex flex-col items-start  border-b border-gray-200 p-4'>
      <p className='pb-4 text-gray-400'></p>
      <div className='flex items-start w-full'>
      <div className='flex items-start'>
       <div className='basis-1/5'><img className='w-8 h-8 rounded-full' src={img} alt='pics' />
       </div>
       <div className='mr-[-30px] basis-4/5'>
        <p className='text-gray-400'><strong className='text-black'>Martha Craig</strong><small className='px-2'>@Craig_love</small>.12h</p>
        <p className='py-3 text-left'>Y'all ready for this post.i still don't know the score of Portugal vs Spain
        </p>
        <div  className='flex justify-between mt-3'>
         <div className='flex text-gray-400'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/> </svg>
          <p className='pl-2 text-sm'></p>
         </div>
         <div className='flex text-gray-400'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id='Retweet' onClick={ handleRetweet } fill='currentColor' viewBox="0 0 640 512"><path d="M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"/></svg>
          <p className='pl-2 text-sm'></p>
         </div>
         <div className='flex text-gray-400'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick={() => setLike(false)} className={`${like ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>
          <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick={() => setLike(true)} className={`${ like ? 'hidden' : ''} fill-red-500`}  viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" className="fill-red-500"></path></svg>
          <p className='pl-2 text-sm'></p>
         </div>
         <div className='flex text-gray-400'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
          <p className='pl-2 text-sm'></p>
         </div>
        </div>
        </div>
       </div>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='fill-gray-400 ml-3 mt-2' viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
      </div>
      
      
      {/*Retweet options*/}
       <div id='tweet' className='hidden absolute top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,.5)]'>
       <div className='fixed left-0 bottom-0 h-36 w-full z-20 p-4 bg-white rounded-t-xl flex flex-col justify-between'>
        <div className='flex justify-start items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id='Retweet' className='fill-gray-400 mr-8' viewBox="0 0 640 512"><path d="M614.2 334.8C610.5 325.8 601.7 319.1 592 319.1H544V176C544 131.9 508.1 96 464 96h-128c-17.67 0-32 14.31-32 32s14.33 32 32 32h128C472.8 160 480 167.2 480 176v143.1h-48c-9.703 0-18.45 5.844-22.17 14.82s-1.656 19.29 5.203 26.16l80 80.02C499.7 445.7 505.9 448 512 448s12.28-2.344 16.97-7.031l80-80.02C615.8 354.1 617.9 343.8 614.2 334.8zM304 352h-128C167.2 352 160 344.8 160 336V192h48c9.703 0 18.45-5.844 22.17-14.82s1.656-19.29-5.203-26.16l-80-80.02C140.3 66.34 134.1 64 128 64S115.7 66.34 111 71.03l-80 80.02C24.17 157.9 22.11 168.2 25.83 177.2S38.3 192 48 192H96V336C96 380.1 131.9 416 176 416h128c17.67 0 32-14.31 32-32S321.7 352 304 352z"/></svg>
         <p>Retweet</p>
        </div>
        <div className='flex justify-start items-center'>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className='fill-gray-400 mr-8' viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>
         <p>Quote Retweet</p>
        </div>
        <div onClick={handleRetweet} className='text-center py-1 px-10 rounded-full bg-gray-100 self-center text-black'>Cancel</div>
       </div>
       </div>
     </div>
    )
}

export default Tweet;