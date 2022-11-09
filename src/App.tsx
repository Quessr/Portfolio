import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { decrement, incrementByAmount } from "./store/counter";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  const handleIncrement = () => dispatch(incrementByAmount(5));
  const handleDecrement = () => dispatch(decrement());

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>+</button>
        <div>count is {count}</div>
        <button onClick={handleDecrement}>-</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
