import { useState } from 'react';
import '/src/style.css'
const App = () => {

  const [data, setData] = useState({ first: "", second: "", third: "", res: "" });
  const [result, setResult] = useState({ sum: "", avg: "", largest: "", smallest: "" });
  const [showResults, setShowResults] = useState(false);


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }


  const handleCalculation = () => {
    // sum 
    const sum = Number(data.first) + Number(data.second) + Number(data.third);
    console.log("Sum:", sum);

    // avg 
    const avg = sum / 3;
    console.log("Average:", avg);

    let largest;
    let smallest;
    const myArr = [Number(data.first), Number(data.second), Number(data.third)];

    // largest 
    if (myArr[0] === Math.max(...myArr)) {
      largest = "First no";
    } else if (myArr[1] === Math.max(...myArr)) {
      largest = "Second no";
    } else if (myArr[2] === Math.max(...myArr)) {
      largest = "Third no";
    }

     console.log("Largest:", largest);

    // smallest 
    if (myArr[0] === Math.min(...myArr)) {
      smallest = "First no";
    } else if (myArr[1] === Math.min(...myArr)) {
      smallest = "Second no";
    } else if (myArr[2] === Math.min(...myArr)) {
      smallest = "Third no";
    }

    console.log("Smallest:", smallest);

    setResult({ ...result, sum: sum, avg: avg, largest: largest, smallest: smallest });
    setShowResults(true);
  }


  const clear = () => {
    setData({ first: "", second: "", third: "", res: "" });
    setResult({ sum: "", avg: "", largest: "", smallest: "" });
    setShowResults(false);
    console.clear();
  }


  return (
    <>
      <div className="main">
        <h1>Task 1</h1>
        <br />
        <label className="first-no">First no<input type="number" name="first" value={data.first} onChange={handleChange} /> </label>
        <br />
        <label className="second-no" >Second no<input type="number" name="second" value={data.second} onChange={handleChange} /> </label>
        <br />
        <label className="third-no">Third no<input type="number" name="third" value={data.third} onChange={handleChange} /></label>
        <br />
        <input type="button" value="Click Me" onClick={handleCalculation} />
        <input type="button" value="Clear" onClick={clear} />
        <hr />
      </div>


      {showResults && (
        <div className="main2">
          <label>sum : <input type="text" name="sum" value={result.sum} readOnly /> </label>
          <label>avg : <input type="text" name="avg" value={result.avg} readOnly /> </label>
          <label>largest : <input type="text" name="largest" value={result.largest} readOnly /> </label>
          <label>smallest : <input type="text" name="smallest" value={result.smallest} readOnly /> </label>
        </div>
      )}
    </>
  )
}

export default App;