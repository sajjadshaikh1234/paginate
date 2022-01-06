import React from 'react'

const SumisZero = () => {

    const value = [-4, 3, -5, 0, 1, 4, 8, 6]  // which pair sum is zero

    const changepair = (array) => {
        // console.log(value, "value")
        // for (let number of value) {
        //     console.log(number, "number")
        //     for (let j = 1; j <= value.length; j++) {
        //         console.log(value.length)
        //         if (number + value[j] === 0) {
        //             console.log(number, value[j])
        //             return [number, value[j]]
        //         }
        //     }
        // }

        let left = 0;
        let right = value.length - 1;
        while (left < right) {
            const sum = value[left] + value[right];

            if (sum === 0) {
                return [value[left], value[right]]
            } else if (sum>0) {
                right--
            } else {
               left++
            }
        }
    }

    return (
        <div>
            <button onClick={changepair}>value</button>
            <h1>{changepair()}</h1>
        </div>
    )
}

export default SumisZero;