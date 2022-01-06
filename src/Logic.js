import React, { useRef, useState } from 'react'


const Logic = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let Oddnumber = numbers.filter((ele) => ele % 2 != 0);
    let Evennumber = numbers.filter((ele) => ele % 2 === 0);
    // console.log("odd", Oddnumber);
    // console.log("even", Evennumber);
    const [number, setNumber] = useState('')
    //  let count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const inputref = useRef()
    const changehandler = () => {
        //135791113
        // const i = count.filter((elem) => elem % 2 != 0)
        // const j = count.filter((elem) => elem % 2 === 0)

        //  if(i %2 === 0) {
        //     //  console.log(i)
        //    alert("odd")
        //  }
        //  else{
        //      alert("even")
        //  }

        // alert(number)
        if (number % 2 === 0) {

            alert("the number is even")
        }
        else {
            alert("the number is odd")
        }
        // inputref.current.style.display="none"
    }

    const handleChange = (e) => {
        setNumber(e.target.value)
    }


    return (
        <div>
            <h1>All Number</h1>
            {/* {
    numbers%2 ? <p>even</p>:<p>odd</p> 
}  */}
            <h3>oddNumber</h3>
            <p style={{ color: "green" }}>{Oddnumber}</p>
            <h2>Even number</h2>
            <p style={{ color: "red" }}>{Evennumber}</p>
            <input type="number" value={number} ref={inputref} onChange={handleChange} />
            <button onClick={changehandler}  >number</button>
        </div>
    )
}

export default Logic;