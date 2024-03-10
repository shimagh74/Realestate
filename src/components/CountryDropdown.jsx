import React, { useState, useEffect, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
// import {Menu} from '@headlessui/react'
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext)
  console.log(countries)
  const [isOpen, setIsOpen] = useState(false)

  return <div className='relative dropdown'>
    <button onClick={() => setIsOpen((prev) => !prev)} className='dropdown-btn w-full'>
      <RiMapPinLine className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight '> {country}</div>
        <div className='text-[13px]'>Select your place</div>
      </div>
      {
        !isOpen ? (<RiArrowDownSLine className='dropdown-icon-secondary' />) : (<RiArrowUpSLine className='dropdown-icon-secondary' />)
      }
    </button>
    {isOpen && (<div className='dropdown-menu'>
      {
        countries.map((country, index) => {
          return (
            <div onClick={() => setCountry(country)} key={index}>
              {country}
            </div>
          )

        })
      }
    </div>)}
  </div>;
};

export default CountryDropdown;
