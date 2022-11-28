import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';

import './App.css';
import reactLogo from './assets/react.svg';
import { RootState } from './store';
import { decrement, incrementByAmount } from './store/counter';

const Button = styled.button`
  ${tw`px-2 text-purple-500 border border-purple-500 bg-white outline-none`}
`;

const App = () => {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => dispatch(incrementByAmount(5));
  const handleDecrement = () => dispatch(decrement());

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={handleIncrement}>+</Button>
        <div>count is {count}</div>
        <Button onClick={handleDecrement}>-</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
