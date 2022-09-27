// import { useState } from "react";
// import MainIndex from "./WatsapClone/MainIndex";

// function App() {
//   const data = [
//     {
//       id: 1,
//       name: "Mehran",
//     },
//     {
//       id: 2,
//       name: "Kamran",
//     },
//     {
//       id: 3,
//       name: "Rehan Ali",
//     },
//     {
//       id: 4,
//       name: "dilbar",
//     },
//     {
//       id: 5,
//       name: "Feroz",
//     },
//     {
//       id: 6,
//       name: "Jalil",
//     },
//     {
//       id: 5,
//       name: "Feroz",
//     },
//     {
//       id: 6,
//       name: "Jalil",
//     },
//   ];
//   const name = "Feroz";
//   const [users, setusers] = useState("");

//   return (
//     <>
//       <input
//         className="text-black"
//         type="text"
//         value={users}
//         onChange={(e) => setusers(e.target.value)}
//       />
//       {data
//         .filter((val) => {
//           if (users === "") return val;
//           else if (val.name.toLowerCase().includes(users.toLocaleLowerCase())) {
//             return val;
//           }
//         })
//         .map((val) => {
//           return <p>{val.name}</p>;
//         })}
//     </>
//   );
//   // return <MainIndex />;
// }

// export default App;

// import React, { useState } from "react";

// const data = [
//   {
//     id: 1,
//     name: "Mehran",
//   },
//   {
//     id: 2,
//     name: "Kamran",
//   },
//   {
//     id: 3,
//     name: "Rehan Ali",
//   },
//   {
//     id: 4,
//     n88me: "dilbar",
//   },
//   {
//     id: 5,
//     name: "Feroz",
//   },
//   {
//     id: 6,
//     name: "Jalil",
//   },
//   {
//     id: 5,
//     name: "Feroz",
//   },
//   {
//     id: 6,
//     name: "Jalil",
//   },
// ];

// const App = () => {
//   const [searchValue, setsearchValue] = useState("");
//   return (
//     <div>
//       <input
//         className="text-black"
//         type="text"
//         value={searchValue}
//         onChange={(e) => setsearchValue(e.target.value)}
//       />
//       {data
//         .filter((val) => {
//           if (searchValue === "") return val;
//           else if (
//             val.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
//           ) {
//             return val;
//           }
//         })
//         .map((val) => {
//           return <p>{val.name}</p>;
//         })}
//     </div>
//   );
// };

// export default App;
import React from 'react'
import MainIndex from './Resturent/MainIndex'

const App = () => {
  return (
    <div>
      <MainIndex/>
    </div>
  )
}

export default App
