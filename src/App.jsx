 import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/layouts/Header.layout';
import Footer from './components/layouts/Footer.layout';

import Home from './pages/home/Home.page';
import Post from './pages/post/Post.page';
import Welcome from './pages/auth/Welcome.page';
import LoginPage from './pages/auth/Login.page';
import Sidebar from './components/common/SideBar';

function App() {
  // const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  };
  return (
    <Router >
      <Header toggleSidebar={toggleSidebar}/>
      {
        isOpen && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      }
      <div className='min-h-full bg-transparent pt-[85px] bg-glass-no-blur'>


        <div>
          <Routes >


            <Route exact path='/' element={<Welcome />} />
            <Route exact path='/auth' element={<LoginPage />} />
            <Route exact path='/feed' element={<Home />} />
            <Route exact path='/post/:id' element={<Post />} />
            <Route  path='*' element={<Home />} />

          </Routes>

        </div>
        <Footer />
      </div>

    </Router>
  )
}

export default App
