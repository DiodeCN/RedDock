import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from './HomeProvider';
import Navbar from '../components/Navbar';

function Home() {
    const navigate = useNavigate();
  
    const handleRedirect = () => {
      navigate('/login');
    };
  
    return (
      <>
        <Navbar />
        <h2>你好</h2>
        <button onClick={handleRedirect}>跳转到登录页面</button>
      </>
    );
  }
  

export default Home;
