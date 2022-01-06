import React, { useRef } from "react";

const UseREfes = () => { 
    const inputref = useRef()

    const changevalue =() => {
        // console.log(".........")i
        inputref.current.value="1000"
        inputref.current.focus()
        inputref.current.style.color="red"
        // inputref.current.style.display="none"
    }
    return(
        <>
        <h1>use Reference</h1>
        <input type="text" ref={inputref} /> <br />
        <button onClick={changevalue}>Submit</button>
        </>
    )
}

export default UseREfes;