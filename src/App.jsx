/* eslint-disable no-unused-vars */
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button taped');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React core concepts part 2</h1>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click here</button>
      <button onClick={handleClick2}>Click here</button>
      <button onClick={() => { alert('tuki') }}>Click here</button>
      <button onClick={() => addToFive(5)}>Click here</button>
    </>
  )
}

export default App
