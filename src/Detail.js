import React from "react";

const Detail = ({ its }) => {
  return its.image ? (
    <div className="h-96 w-96">
      <img src={its.image} className="h-full w-full" alt="" />
      <p>{its.it}</p>
    </div>
  ) : (
    ""
  );
};

export default Detail;
