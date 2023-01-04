import { useEffect } from 'react';


const Search = ({ setSearch,setBell }) => {
  
  useEffect(() => {
    setSearch(true)
    setBell(false)
  })
  
  return (
     <div className='mt-12'>
      <h4 className='font-bold p-4 border-b border-gray-200 mb-6'>Trends for you</h4>
      <div className='flex flex-col items-center text-center px-6'>
       <h2 className='font-bold text-lg pb-2'>No new trends for you</h2>
       <p className='text-gray-500 text-sm'>it seem like there is not alot to show you right now, but you can see trends for other areas</p>
       <a className='mt-2 py-2 px-4 rounded-full bg-[#4C9EEB] text-white font-bold'>Change Location</a>
      </div>
     </div>
    )
}

export default Search;