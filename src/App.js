import {useState} from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

const App =()=> {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  

  const closeSidebar = () =>{
    setSidebarOpen(false);
  }

  return (
    <div className="container">
    <Main />
    <Sidebar sidebarOpen={sidebarOpen}  closeSidebar={closeSidebar}/>
    </div>
  );
};

export default App;
