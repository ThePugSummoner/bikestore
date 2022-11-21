import React from "react"
import{useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import uuid from 'react-uuid';


function DropwDown(props){
    const [open,setOpen]= useState(false)

    function handleOpen (){
        setOpen(!open)
        }

return(
<>
                    <h5 onClick={handleOpen}>{props.heading} <FontAwesomeIcon icon="fa-solid fa-caret-down" size="lg"/></h5>
                    {open&&(<ul>
                        {props.items.map(item => <li key={uuid}>{item}</li>)}
                    </ul>)}

</>
)
}

export default DropwDown