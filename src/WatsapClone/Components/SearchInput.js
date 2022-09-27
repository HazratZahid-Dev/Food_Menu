import React from "react";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="h-20 bg-gray-800 w-full flex items-center justify-center">
      <input
        value={value}
        onChange={onChange}
        className="w-full mx-5 rounded-full bg-gray-700 text-white outline-none  border-none px-1"
      />
    </div>
  );
};

export default SearchInput;
