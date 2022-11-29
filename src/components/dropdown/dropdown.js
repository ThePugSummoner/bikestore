import React from "react"
import{useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import uuid from 'react-uuid';
import "./dropdown.css"


function DropwDown(props){
    const [open,setOpen]= useState(false)

    function handleOpen (){
        setOpen(!open)
        }

return(
<div className="dropdown-item-list">
                    <h5 onClick={handleOpen}>{props.item.heading} <FontAwesomeIcon icon="fa-solid fa-caret-down" size="lg"/></h5>
                    {open&&(<ul>
                        {props.item.items.map(item => <li key={uuid()}>{item}</li>)}
                    </ul>)}

</div>
)
}

export default DropwDown