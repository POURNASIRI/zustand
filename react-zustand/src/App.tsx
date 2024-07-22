import viteLogo from '/vite.svg';
import './App.css';
import { useCountStore } from './store';

function App() {
  const count = useCountStore((state) => state.count);
  const { increment, decrement } = useCountStore((state) => state.actions);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          react logo
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={increment}>increment</button>
        <span>{count}</span>
        <button disabled={count <= 0 && true} onClick={decrement}>decrement</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
