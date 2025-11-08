import React, { useState } from 'react'

const HookuseState = () => {


    const [hookArNam, hookArFunc] = useState("demoValue");


    function chngName() {

        const cars = ['a', 's', 'd', 'b', 'v', 't', 'd', 'mm', 'ddd', 'vvv', 'gg']


        var takeANum = Math.floor(Math.random() * 11);

        hookArFunc(cars[takeANum]);



    }

    return (
        <div>
            <h1>{hookArNam}</h1>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={chngName}>for Chnge</button>
        </div>
    )
}

export default HookuseState
