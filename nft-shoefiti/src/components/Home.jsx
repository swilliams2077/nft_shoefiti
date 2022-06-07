import React from 'react'
import home from "../assets/home.png";
import banner from "../assets/banner.png"

export default function Home() {
  return (
    <div className='home'>
      <div className='container'>
        {/* <div className='banner-content'>
          <img src={banner} alt='banner'></img>
        </div> */}
        <div className='content'>
          <p className='sub-title'>--------------(shoes+graffiti)--------------</p>
          <h1 className='title'>SHOEFITI: A "Soleful" Exploration</h1>
          <h3 className='description'>
           > Is it an inner-city act of defiance?<br/> 
            > Is it a celebratory act of unity?<br/>
            > Or is it simply an adolescent right of passage?</h3>
          <p className='description'>
            SHOEFITI can consist of all of these things, and more.<br/>
            <br/>
            The purpose of this collection is to destigmatize the perception of SHOEFITI while brining to the forefront the artistic and creative elements athe  act evokes. We look to the sky, and dangling freely, is a reflection of culture, a reflection of a moment; a reflection of one's self.</p>
          <p className= 'title'>SHOEFITI DROP #1 DETAILS</p>
          <p className='sub-title'>-------------30 NFTs available-------------</p>
          <p className='description'>
              Presale (for existing collectors)
              Starts Tuesday June 7th at 3pm EST and is open until Wednesday June 8th at 3pm EST
              <br/><br/>
              Public release starts Wednesday June 8th at 4pm EST
              <br/><br/>
              Price is .25 ETH per token
              <br/><br/>
          <p>-----------------------------------------------</p>    
          
              </p>
          {/* <button>
          <a href="https://opensea.io/">Visit OpenSea</a>
          </button> */}
        </div>
        {/* <div className='image-container'>
          <div className='image'>
            <img src={home} alt="home" />
          </div>
        </div> */}
      </div>
    </div>
  )
}