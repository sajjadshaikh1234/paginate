import React, { useState } from 'react'

const Newfile = () =>{

let count = [1,2,3,4,5,6,7,8,9] 
// console.log("array",array)
// const [data,setData] = useState()
// for(let count=0;count<=10;count++)
      


    return(
        <div>
            <h3>All Value</h3>
             <h2>{count}</h2>
             {/* <h3>even number</h3> */}
        </div>
    )
}

export default Newfile;




// for(let count =0; count<=100;count++){
//     count%2==0? console.log(`${count} is even`):console.log(`${count} is odd`);
//     ;
//    }

// function isEven(n) {
//     return n % 2 == 0;
//  }
 
//  function isOdd(n) {
//     return Math.abs(n % 2) == 1;
// //  }
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);