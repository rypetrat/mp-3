import { useState } from "react";

export default function Projects() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(Number);
  const [color, setColor] = useState("black");

  const updateResult = (newResult: number) => {
    setResult(newResult);
    setColor(newResult < 0 ? "red" : "black");
  };

  const calcAdd = () => {
    let input1 = Number(num1);
    let input2 = Number(num2);
    let result = input1 + input2;
    updateResult(result);
  };

  const calcSub = () => {
    let input1 = Number(num1);
    let input2 = Number(num2);
    let result = input1 - input2;
    updateResult(result);
  };

  const calcMult = () => {
    let input1 = Number(num1);
    let input2 = Number(num2);
    let result = input1 * input2;
    updateResult(result);
  };

  const calcDiv = () => {
    let input1 = Number(num1);
    let input2 = Number(num2);
    let result = input1 / input2;
    updateResult(result);
  };

  const calcPow = () => {
    let input1 = Number(num1);
    let input2 = Number(num2);
    let result = Number(input1)
    for(let i = 1; i < input2; i++) {
        result = result * input1
    }
    updateResult(result);
  };

  const calcClear = () => {
    setNum1("");
    setNum2("");
    setResult(Number);
    setColor("black");
  };

  return (
    <>
      <h2 id="projects-title">Project Source Codes</h2>
      <div id="projects">
          <div id="projects-text">
              <ul>
                  <li>Java implemented <a target="_blank" href="https://github.com/rypetrat/CS440/tree/main/PAs/PA2">Neural Network Tetris Agent</a></li>
                  <li>Django implemented <a target="_blank" href="https://github.com/rypetrat/CS412/tree/master/movie_review">Movie Review Project</a></li>
                  <li>React/JS implemented <a target="_blank" href="https://github.com/rypetrat/CS411">Health Diagnostic Webapp</a></li>
                  <li>Java implemented <a target="_blank" href="https://github.com/rypetrat/CS440/tree/main/PAs/PA1">Artificially Intelligent Battleship Agent</a></li>
                  <li>React/JS implemented <a target="_blank" href="https://github.com/rypetrat/Valentine">Valentines day website</a></li>
                  <li>Django implemented <a target="_blank" href="https://github.com/rypetrat/CS412/tree/master/mini_fb">Mini Facebook Project</a></li>
                  <li>Django implemented <a target="_blank" href="https://github.com/rypetrat/CS412/tree/master/voter_analytics">Voter Analytics Project</a></li>
                  <li>Django implemented <a target="_blank" href="https://github.com/rypetrat/CS412/tree/master/marathon_analytics">Marathon Analytics Project</a></li>
              </ul>
          </div>
      </div>
      <div id="projects-calculator">
          <h1>Javascript Calculator</h1>
          
          <div className="num-inputs">
            <label htmlFor="num1-input"></label>
            <input id="num1-input" value={num1} onChange={(e) => setNum1(e.target.value)}/>
          </div>
          <div className="num-inputs">
            <label htmlFor="num2-input"></label>
            <input id="num2-input" value={num2} onChange={(e) => setNum2(e.target.value)} />
          </div>
          
          <div id="button-container">
            <button onClick={calcAdd}>+</button>
            <button onClick={calcSub}>-</button>
            <button onClick={calcMult}>*</button>
            <button onClick={calcDiv}>/</button>
            <button onClick={calcPow}>**</button>
            <button onClick={calcClear}>Clear</button>
          </div>
          <div id="calc-retVal">
              <p id="retVal" style={{ color: color }}>{result}</p>
          </div>
      </div>
    </>
  );
}