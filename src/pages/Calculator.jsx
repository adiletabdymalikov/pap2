import { useState } from "react";

const Calculator = () => {
  let [num, setNum] = useState(0);
  let [num2, setNum2] = useState(0);
  let [sum, setSum] = useState(0);
  let [name, setName] = useState();

  function plus() {
    setSum(parseFloat(num) + parseFloat(num2));
    setName("John");
  }
  function minus() {
    setSum(parseFloat(num) - parseFloat(num2));
    setName("John");
  }
  function multiply() {
    setSum(parseFloat(num) * parseFloat(num2));
    setName("John");
  }

  function divide() {
    setSum(parseFloat(num) / parseFloat(num2));
    setName("John");
  }
function percent() {
  setSum((parseFloat(num) * parseFloat(num2)) / 100);
  setName("John");
}
  return (
    <>
      <input type="text" onChange={(e) => setNum(e.target.value)} />
      <input type="text" onChange={(a) => setNum2(a.target.value)} />
      <br />
      Сумма: {sum} <br />
<button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      <button onClick={multiply}>*</button>
      <button onClick={percent}>%</button>
      <button onClick={divide}>/</button>

      <br />
      {name}
    </>
  );
};

export default Calculator;