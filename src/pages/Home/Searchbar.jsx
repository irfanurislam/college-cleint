import React, { useState } from 'react';

const Searchbar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };
    return (
     <div className=' bg-black py-1'>
           <div className="flex items-center justify-center space-x-4 my-8 ">
      <input
        type="text"
        placeholder="Search for a college name"
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
     </div>
    );
};

export default Searchbar;