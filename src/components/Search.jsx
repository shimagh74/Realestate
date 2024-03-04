import React from 'react';

import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import {RiSearch2Line} from 'react-icons/ri'
const Search = () => {
  return <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between
  gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
    <CountryDropdown/>
    <PropertyDropdown/>
    <PriceRangeDropdown/>
    </div>;
};

export default Search;