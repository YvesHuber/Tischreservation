import {useState} from "react"
import { StarFill, Star } from "react-bootstrap-icons"



export default function Rating () {


    const [Rating, setRating] = useState(0)
    const Starvalues = [1,2,3,4,5]
    

    return (
        <>
        {Starvalues.map (star => 
            <>
            { Rating >= star
                 ? <StarFill onClick={(e) => {setRating(star)}}></StarFill>
          
                 : <Star onClick={(e) => {setRating(star)}}></Star>
            }
            </>
        )}
    
        </>
    )

}

/*export default function Rating ({rating, onChange}) {
    const [stars, setStars] = useState(rating)
    useEffect(() => {
        onChange(stars)
    }, [stars])
    const handleClick = (value) => {
        setStars(value==stars ? 0 : value)
    }
    return (
      <>
          { [1,2,3,4,5].map(v =>
            <>
                { stars >= v
                  ? <StarFill onClick={ () => handleClick(v) } />
                  : <Star onClick={ () => handleClick(v) } />
                }
            </>)
          }
      </>
    )
}*/