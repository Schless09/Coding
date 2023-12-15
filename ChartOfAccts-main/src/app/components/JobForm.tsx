// "use client";
// import React, { useState } from "react";

// const JobForm = ({ onCreateJob }) => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     const newJob = {
//       title,
//       description,
//       location: `${city}, ${state}`,
//     };
//     onCreateJob(newJob);
//     setTitle("");
//     setDescription("");
//     setCity("");
//     setState("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="my-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Job Title"
//           className="border rounded p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Job Description"
//           className="border rounded p-2"
//         ></textarea>
//       </div>
//       <div className="mb-4">
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="City"
//           className="border rounded p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="text"
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//           placeholder="State"
//           className="border rounded p-2"
//         />
//       </div>
//       <div>
//         <button
//           type="submit"
//           className="bg-green-500 text-white px-3 py-1 rounded"
//         >
//           Create Job
//         </button>
//       </div>
//     </form>
//   );
// };

// export default JobForm;
