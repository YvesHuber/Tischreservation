import { HeartFill, Heart } from "react-bootstrap-icons"
import {useState, useEffect} from "react"


export default function Like(props){

    
    const [checked, setcheck] = useState(props.like)


    useEffect(() =>{
        props.onChange(checked)
    }, [checked])

    return (
        <>
            { checked
               ? <HeartFill onClick={ () => setcheck(!checked)}/>
               : <Heart onClick={() => setcheck(!checked)}/>
            }

        </>
    )

}