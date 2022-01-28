import React, { useContext } from "react";
import '../App.css';
import { Context } from "./Context";

const CalculaterInterfaceButtons = () => {
    const {numberOne, setNumberTwo, setSign, setNumberOne, setEqual } = useContext(Context);

    const setSymbol = (x) => {
        if(x === "."){
            if(numberOne.indexOf(".") === -1){
                setNumberOne(numberOne + x);
            }
        }else if (x === "x-") {
            let y = Number(numberOne);
            y = y* (-1);
            y = y.toString();
            setNumberOne(y);

        }else if (x === "%") {
            let y = Number(numberOne);
            y = y * (0.01);
            y = y.toString();
            setNumberOne(y);
            
        }else if(x !=="=") {
            setNumberTwo(numberOne);
            setNumberOne("");
            setSign(x)
        }
    }
    const empty = () => {
        setNumberTwo("");
        setSign("");
        setNumberOne("0");
    }
    const setNumber = (x) => {
        if(numberOne === "0"){
            setNumberOne(x.toString())
        }else {
            setNumberOne(numberOne + x);                
        }
    }
    const timeEqual = () => {
        setEqual("=");
    }

    return(
        <div className="gridButton">
            <button onClick={() => empty()} className='columnOne rowOne font'>AC</button>
            <button onClick={() => setSymbol("x-")} className='columnTwo rowOne font'>+/-</button>
            <button onClick={() => setSymbol("%")} className='columnThree rowOne font'>%</button>
            <button onClick={() => setSymbol("/")} className='columnFour rowOne font'>/</button>
            <button onClick={() => setNumber(7)} className='columnOne rowTwo font'>7</button>
            <button onClick={() => setNumber(8)} className='columnTwo rowTwo font'>8</button>
            <button onClick={() => setNumber(9)} className='columnThree rowTwo font'>9</button>
            <button onClick={() => setSymbol("x")} className='columnFour rowTwo font'>x</button>
            <button onClick={() => setNumber(4)} className='columnOne rowThree font'>4</button>
            <button onClick={() => setNumber(5)} className='columnTwo rowThree font'>5</button>
            <button onClick={() => setNumber(6)} className='columnThree rowThree font'>6</button>
            <button onClick={() => setSymbol("-")} className='columnFour rowThree font'>-</button>
            <button onClick={() => setNumber(1)} className='columnOne rowFour font'>1</button>
            <button onClick={() => setNumber(2)} className='columnTwo rowFour font'>2</button>
            <button onClick={() => setNumber(3)} className='columnThree rowFour font'>3</button>
            <button onClick={() => setSymbol("+")} className='columnFour rowFour font'>+</button>
            <button onClick={() => setNumber(0)} className='rowFive font' style={{gridColumn: "1/3"}}>0</button>
            <button onClick={() => setSymbol(".")} className='columnThree rowFive font'>.</button>
            <button onClick={() => timeEqual()} className='columnFour rowFive font'>=</button>
        </div>
    )

}

export default CalculaterInterfaceButtons;