import { useState, useEffect} from "react";
import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

function Calculadora() {
  const [num, setNum] = useState(0);
  const [old, setOld] = useState(0);
  const [opr, setOpr] = useState("");
  const [reset, setReset] = useState();
  
  function clickButton(e){
    var evento = e.target.value;
    if (num.length > 0 && reset === "") {
      setNum(num + evento);
    } else{
      setNum(evento);
    }
    setReset("");
  }

  function Somar(){
    if (num > 0) {
      setOld(num);
      setOpr("+");
      setNum("+");
      setReset("+");
    }
  }

  function Subtrair(){
    if (num > 0) {
      setOld(num);
      setOpr("-");
      setNum("-");
      setReset("-");
    }
  }

  function Porcentagem(){
    if (num > 0) {
      setOld(num);
      setOpr("%");
      setNum("%");
      setReset("%");
    }
  }

  function Multiplicar(){
    if (num > 0) {
      setOld(num);
      setOpr("x");
      setNum("x");
      setReset("x");
    }
  }

  function Clear(){
    setNum(0);
    setOld(0);
    setReset("");
  }

  function Divisao(){
    if (num > 0) {
      setOld(num);
      setOpr("/");
      setNum("÷");
      setReset("/");
    }
  }

  function Elevado(){
    if (num > 0) {
      setOld(num);
      setOpr("x²");
      setNum("x²");
      setReset("x²");
    }
  }

  function result(){
    if (old > 0 && num > 0 && opr.length > 0){
      if (opr === "+") {
        setNum(parseInt(old) + parseInt(num));
      }
      if (opr === "-") {
        setNum(old - num);
      }
      if (opr === "/") {
        setNum(old / num);
      }
      if (opr === "x") {
        setNum(old * num);
      }
    }  
    if (opr === "%") {
      setNum(old / 100);
    }
    if (opr === "x²"){
      setNum(old ** 2);
    }
  }

  AOS.init();
  return (
    <main className='app'>
      <div className='calculadora' data-aos="fade-up" data-aos-delay="400">
        <h1>React Calculator</h1>
        <div className='container'>
          <div className='tela'><h1>{num}</h1></div>
          <div className='buttons'>

            <div className='div-buttons' id="btn1">
              <button id="btn-c" onClick={Clear}>C</button>
              <button onClick={Porcentagem}>%</button>
              <button onClick={Multiplicar}>x</button>
            </div>

            <div className="div-buttons" id="btn2">
              <button onClick={clickButton} value={7}>7</button>
              <button onClick={clickButton} value={8}>8</button>
              <button onClick={clickButton} value={9}>9</button>
              <button onClick={Somar} >+</button>
            </div>

            <div className='div-buttons' id="btn3">
              <button onClick={clickButton} value={4}>4</button>
              <button onClick={clickButton} value={5}>5</button>
              <button onClick={clickButton} value={6}>6</button>
              <button onClick={Subtrair}>-</button>
            </div>

            <div className='div-buttons' id="btn4">

              <div id='btn4-div1'>
                <div className='divs-especiais'>
                  <button onClick={clickButton} value={1}>1</button>
                  <button onClick={clickButton} value={2}>2</button>
                  <button onClick={clickButton} value={3}>3</button>
                </div>

                <div className='divs-especiais'>
                  <button onClick={clickButton} value={0}>0</button>
                  <button onClick={Elevado}>x²</button>
                  <button onClick={Divisao}>÷</button>
                </div>
              </div>
              <div id="btn4-div2">
                <button id='btn-extra' onClick={result}>=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )  
}

export default Calculadora;