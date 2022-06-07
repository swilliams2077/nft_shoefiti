import React from 'react'
import superETH from '../assets/supereth.png'

export default function Card({ image, series, title, price, tag, time}) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt="super" />
      </div>
      <div className='card-content'>
        <div className='card-heading'>
          <span className='card-series'>{series}</span>
          <span className='card-top'>Top bio</span>
        </div>
        <div className='card-detail'>
          <h4 className='card-title'>{title}</h4>
          <div className='card-price'>
            {/* <img src={superETH.png} alt="super eth" /> */}
            <h4>{price} ETH</h4>
          </div>
        </div>
        <div className='card sub-details'>
          <span>#{tag}</span>
          <span>{time} day left</span>
        </div>
      </div>
    </div>
  )
}
