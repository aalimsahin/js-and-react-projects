import React, { useState, createContext } from "react";

export const Context = createContext(null);

export const ContextProvider = props => {
    const [numberOne, setNumberOne] = useState("0");
    const [sign, setSign] = useState("");
    const [numberTwo, setNumberTwo] = useState("");
    const [equal, setEqual] = useState("");


    return (<Context.Provider value={
        {
            numberOne, setNumberOne,
            sign, setSign,
            numberTwo, setNumberTwo,
            equal, setEqual
        }
    }>
        {props.children}
    </Context.Provider>);
};