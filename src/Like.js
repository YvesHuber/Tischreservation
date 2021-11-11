import { HeartFill, Heart } from "react-bootstrap-icons"
import useState from "react"


export default function Like(props){

    
    const [checked, setcheck] = useState(props.like)


    return (
        <div>
            { checked
               ? <HeartFill onClikc={ () => setcheck(!checked)}/>
               : <Heart onClikc={() => setcheck(!checked)}/>
            }

        </div>
    )

}