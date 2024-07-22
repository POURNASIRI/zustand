// import { useUserStore } from './store/userStore';

import { useStore } from "./store/userStore";

// export default function App() {
//   const { firstName, UpdateFirstName } = useUserStore((state) => state);

//   return (
//     <main className='p-4'>
//       <label>
//         First name
//         <input
//           className='border border-black'
//           onChange={(e) => UpdateFirstName(e.currentTarget.value)}
//           value={firstName}
//         />
//       </label>

//       <p>
//         Hello, <strong>{firstName}!</strong>
//       </p>
//     </main>
//   );
// }
// deep or nested

export default function App() {

  const {deep,normalInc,normalSetText} = useStore((state) => state);
  return (
    <div className="p-4">
      <h3>Normal</h3>
      <div>
        {deep.nested.object.count}
        <button className="border border-black" onClick={normalInc}>+1</button>
        <input className="border border-black"
          value={deep.nested.array[0]}
          onChange={(e) => normalSetText(e.target.value, 0)}
        />
      </div>
      <h1 className="text-3xl">{deep.nested.array[0]}</h1>
    </div>
  );
}
