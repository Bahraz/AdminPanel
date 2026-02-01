// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import LoginPanel from "../components/LoginPanel";


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="min-h-screen bg-[#242424] text-white flex flex-col items-center justify-center p-4 font-sans">
//       <h1 className="text-5xl font-extrabold mb-12 tracking-tight">
//         <span className="bg-clip-text from-sky-400 to-emerald-400">
//           Tailwind działa ogień! 🚀
//         </span>
//       </h1>

//       <div className="flex gap-12 mb-8">
//         <a
//           href="https://vite.dev"
//           target="_blank"
//           className="transition-transform hover:scale-110"
//         >
//           <img
//             src={viteLogo}
//             className="h-32 w-auto drop-shadow-[0_0_2em_#646cffaa]"
//             alt="Vite logo"
//           />
//         </a>
//         <a
//           href="https://react.dev"
//           target="_blank"
//           className="transition-transform hover:scale-110"
//         >
//           <img
//             src={reactLogo}
//             className="h-32 w-auto drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
//             alt="React logo"
//           />
//         </a>
//       </div>

//       <h2 className="text-3xl font-bold mb-8">Vite + React</h2>

//       <div className="bg-[#1a1a1a] p-10 rounded-2xl border border-gray-800 shadow-xl flex flex-col items-center gap-6">
//         <button
//           onClick={() => setCount((c) => c + 1)}
//           className="cursor-pointer bg-sky-500 hover:bg-sky-600 active:scale-95 transition-all px-8 py-3 rounded-xl font-bold text-lg shadow-lg shadow-sky-500/20"
//         >
//           count is {count}
//         </button>

//         <p className="text-gray-400">
//           Edit{" "}
//           <code className="bg-black/50 px-2 py-1 rounded text-emerald-400">
//             src/App.tsx
//           </code>{" "}
//           and save to test HMR
//         </p>
//       </div>

//       <p className="mt-12 text-gray-500 italic hover:text-gray-300 transition-colors">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }

function App() {
return <LoginPanel />;
}

export default App;
