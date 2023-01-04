import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import sparkles  from './clean.png';
import img  from './th-22.webp';

function handleSideBar () {
  const sideBar = document.querySelector('#SideBar');
  const bottom = document.querySelector('#bottom');
  const Tweet = document.querySelector('#Tweet');
  
  sideBar.classList.toggle('hidden')
  bottom.classList.toggle('translate-x-[85%]')
  Tweet.classList.toggle('translate-x-[85%]')
  
}

const Header = ({ bell, search, message,hidHeader }) => {
  return (
     <div className={`${hidHeader ? 'hidden' : 'flex'} justify-between items-center px-4 py-2 border-b border-gray-200 h-12 bg-white`}>
      <img className='w-8 h-8 rounded-full' onClick={handleSideBar} src={ img } alt='images' />
      { !bell && !search && !message && <> <FontAwesomeIcon className='text-[#4C9EEB]' icon={ faTwitter } />
      <img className='text-blue-300 w-6 h-6' src={ sparkles } alt='pics' /> </> }
      { bell && <h4 className='font-bold' >Notifications</h4> }
      { search && <input type='text' placeholder='search' className='px-4 py-1 rounded-full bg-gray-100 focus:outline-none' /> }
      { message && <h4 className='font-bold'>Messages</h4> }
      { (bell || search || message) && <a href='/message/setting'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className='stroke-[#4C9EEB]' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a> }
     </div>
    )
}

export default Header;