import React from "react";

import "./Styles/BottomTab.css";
import { FaPlus, FaCamera, FaMicrophone, FaPager } from "react-icons/fa";

const BottomTab = ({ value, onChange, onSubmit }) => {
  return (
    <div className="bottom__tab">
      <span>
        <FaPlus />
      </span>

      {/* The Input Tag */}
      <form className="bottomtab__input" onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <span>
          <FaPager />
        </span>
      </form>

      <span>
        <FaCamera />
        <FaMicrophone />
      </span>
    </div>
  );
};

export default BottomTab;
