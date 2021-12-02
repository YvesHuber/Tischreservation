
import {useState} from "react"
import Button from "react"

export default function NumberSpinner() {


    const [value, setValue] = useState(0)

    function plus(){
        console.log("plus")
        setValue(value+1)

    }
    function minus(){
        console.log("minus")
        setValue(value-1)
    }

    return (
        <>


        <button onClick={minus}>-</button>
        <p>{value}</p>
        <button onClick={plus}>+</button>
        </>
    )

}