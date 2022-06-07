import React from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import SuperRare from './components/SuperRare';
import Home from './components/Home';
import Free from './components/Free';
import Clients from './components/Clients';
import Like from './components/Like';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Release from './components/Release';
import Banner from './components/Banner' ;
import "./scss/index.scss";
import "./scss/base/_base.scss"

export default function App() {
  return (
    <div className='app-container'>
      <ScrollToTop />
      <Navbar />
      {/* <Banner /> */}
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
    </div>
  )
}
