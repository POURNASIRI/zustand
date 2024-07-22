import { useUserStore } from './store/userStore';

export default function App() {
  const { firstName, UpdateFirstName } = useUserStore((state) => state);

  return (
    <main className='p-4'>
      <label>
        First name
        <input
          className='border border-black'
          onChange={(e) => UpdateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </main>
  );
}
