import React from 'react'
import { useState } from 'react'
import Effact from './Effact'

const State = () => {

    const [num, setNum] = useState(0)
    const [name, setName] = useState("Hussain")
    return (
        <>

            <div>
                <h1>{num}</h1>
                <button onClick={() => setNum(num + 1)} >Plus</button>
                <button onClick={() => setNum(num - 1)} >Minus</button>
            </div>

            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <h1>Your input {name}</h1>

            </div>
            <Effact />
        </>
    )
}

export default State