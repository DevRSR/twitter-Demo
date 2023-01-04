import { useState,useEffect } from 'react';
import { BrowserRouter as Router,Route,Switch  } from 'react-router-dom';
import Header from './components/Header';
import Bottom from './components/Bottom';
import SideBar from './components/SideBar';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Notification from './pages/Notification/Notification';
import Message from './pages/Message/Message';
import MessageSetting from './pages/Message/MessageSetting';
import Profile from './pages/Profile/Profile';
import Privacy from './pages/Privacy/Privacy';
import List from './pages/List/List';


function App() {
  
  const [bell,setBell] = useState(false)
  const [search,setSearch] = useState(false);
  const [message,setMessage] = useState(false);
  const [hidHeader,setHidHeader] = useState(false);
  
   
  
  return (
   <Router>
    <div className='relative overflow-x-hidden overflow-y-hidden'>
     <div className='fixed top-0 left-0 w-screen'>
      <Header hidHeader={ hidHeader } bell={ bell } search={ search } message={ message } />
     </div>
     <div id='SideBar' className='hidden absolute top-0 left-0 w-screen bg-[rgba(243,245,248,.5)] z-10'>
      <SideBar />
     </div>
     <Switch>
      <Route path='/' exact>
       <Home />
      </Route>
      <Route path='/search' exact>
       <Search setSearch={ setSearch } setBell={ setBell } />
      </Route>
      <Route path='/notification' exact>
       <Notification setSearch={ setSearch } setBell={ setBell } />
      </Route>
      <Route path='/messages' exact>
       <Message setSearch={ setSearch } setBell={ setBell } setMessage={ setMessage }/>
      </Route>
      <Route path='/message/setting' exact>
       <MessageSetting setHidHeader={setHidHeader} />
      </Route>
      <Route path='/list' exact>
       <List setHidHeader={ setHidHeader } />
      </Route>
      <Route path='/profile' exact>
       <Profile />
      </Route>
      <Route path='/privacy' exact>
       <Privacy setHidHeader={ setHidHeader } />
      </Route>
     </Switch>
     <div className='fixed font-light bottom-20 right-6 flex justify-center items-center w-14 h-14 rounded-full bg-[#4C9EEB] text-3xl text-white z-10'>+</div>
     <Bottom />
     </div>
    </Router>
  );
}

export default App;
