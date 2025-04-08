import { Search } from 'lucide-react';
import React from 'react';

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-[#6D5BA8] via-[#5A4B91] to-[#4B3F72] flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold mb-2">Browse all Templates</h2>
      <p className="mb-6 text-sm text-purple-200">What would you like to create today?</p>
      
      <div className="w-full flex justify-center">
        <div className="flex gap-2 items-center p-3 rounded-full bg-white w-[90%] sm:w-[60%] md:w-[40%] shadow-md">
          <Search className="text-purple-600" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;

