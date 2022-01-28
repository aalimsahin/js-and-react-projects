import React, { useContext, useEffect } from "react";
import '../App.css';
import { Context } from "./Context";

const CalculaterInterfaceAnswer = () => {
    const {numberOne, setNumberOne, sign, setSign, numberTwo, equal, setEqual } = useContext(Context);

    useEffect(() => {
        console.log("numberOne: " + numberOne);
        console.log("sign: " + sign);
        console.log("numberTwo: " + numberTwo);
        if(equal === "="){
            if(sign === "+"){
                if(numberOne !== ""){
                    let n1 = Number(numberOne);
                    let n2 = Number(numberTwo);
                    n1 = n2 + n1;
                    n1 = n1.toString();
                    setNumberOne(n1);
                }
            }else if (sign === "-") {
                if(numberOne !== ""){
                    let n1 = Number(numberOne);
                    let n2 = Number(numberTwo);
                    n1 = n2 - n1;
                    n1 = n1.toString();
                    setNumberOne(n1);
                }
            }else if (sign === "x") {
                if(numberOne !== ""){
                    if(numberOne === "" || numberTwo === "0" ||numberOne === "0" || numberTwo === ""){
                        setNumberOne("0")
                    }else{
                        let n1 = Number(numberOne);
                        let n2 = Number(numberTwo);
                        n1 = n2 * n1;
                        n1 = n1.toString();
                        setNumberOne(n1);
                    }
                }
            }else if (sign === "/") {
                if(numberOne === "0"|| numberOne === ""){
                    alert("numbers can not divide by '0'");
                    console.log("çalıştım")
                }else{
                    let n1 = Number(numberOne);
                    let n2 = Number(numberTwo);
                    n1 = n2 / n1;
                    n1 = n1.toString();
                    setNumberOne(n1);
                }
            }
            setEqual("");
            setSign("");
        }   
    })

    return(
        <div className='gridAnswer'>
            <div style={{gridColumn:"1/-1", gridRow:"1", textAlign: "right", margin: "auto 0", fontSize: "6em", fontWeight:"600", paddingRight:"3rem"}}>
                {numberOne}
            </div>
        </div>
    )
}

export default CalculaterInterfaceAnswer;