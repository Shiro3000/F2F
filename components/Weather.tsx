"use client"

import React, { useEffect, useState } from 'react'
import './weather.css';

const Weather = () => {

  return (
    <div className='flex flex-col weather h-full'>
        <div className='search-bar text-18'>
            <input type='text' placeholder='Search' />
            <img src='/weather_assets/search.png' alt=''/>
        </div>
        
        <img src='/weather_assets/rain.png' alt='' className='weather-icon' />
        <p className='temperature font-bold'>28 °C</p>
        <p className='location font-semibold'>Bangkok</p>
        <div className='weather-data'>
            <div className='col'>
                <img src='/weather_assets/humidity.png' alt=''/>
                <div>
                    <p>87 %</p>
                    <span>Humidity</span>
                </div>
            </div>
            <div className='col'>
                <img src='/weather_assets/wind.png' alt=''/>
                <div>
                    <p>8 km/h</p>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
        <div className='weather-data'>
            <div className='col'>
                <img src='/weather_assets/waterdrop.png' alt='' className='white-icon'/>
                <div>
                    <p>32 mm</p>
                    <span>Precipitation</span>
                </div>
            </div>
            <div className='col'>
                <img src='/weather_assets/uvindex.png' alt='' className='white-icon'/>
                <div>
                    <p>0</p>
                    <span>UV Index</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather