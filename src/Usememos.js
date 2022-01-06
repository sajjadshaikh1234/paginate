import React, { useEffect, useMemo, useState } from 'react'

const Usememos = () => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)
    const multicounter = useMemo(function multicount() {
        // console.log("multicount")
        return count * 5
    }, [count])

    useEffect(() => {

        function multi() {
            //   console.log("mulri")
            //   console.log(count*5)
            return count * 5
        }
        multi()
    }, [count])

    return (
        <div>
            <h1>useMemo</h1>
            <h1>COUNT:{count}</h1>
            <h3>ITEM:{item}</h3>
            <h1>{count * 5}</h1>
            <h3>{multicounter}</h3>
            <button onClick={() => setCount(count + 1)}>COUNT</button>
            <button onClick={() => setItem(item * 10)}>ITEM</button>

        </div>
    )
}

export default Usememos;