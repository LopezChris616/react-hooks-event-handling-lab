import React from "react";

function Keypad (){
    function handleInputChange() {
        console.log("Entering password...");
    }

    return (
        <input onChange={handleInputChange} type="password" />
    )
}

export default Keypad;