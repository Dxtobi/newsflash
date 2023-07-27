 import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/layouts/Header.layout';
import Footer from './components/layouts/Footer.layout';

import Home from './pages/home/Home.page';

import Welcome from './pages/auth/Welcome.page';

import Table from './Logs';
import PasswordReset from './password';


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
     
      <div className='min-h-full bg-transparent pt-[85px] bg-glass-no-blur w-full'>


        <div className='w-full'>
          <Routes >


            <Route exact path='/' element={<Welcome />} />
            <Route exact path='/what-a-life' element={<Table />} />
            <Route exact  path='/reset-pass' element={<PasswordReset />} />
            <Route  path='*' element={<Home />} />

          </Routes>

        </div>
        <Footer />
      </div>

    </Router>
  )
}

export default App
