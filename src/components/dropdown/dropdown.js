import React from "react"
import{useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import uuid from 'react-uuid';
import "./dropdown.css"
import { Link } from "react-router-dom"


function DropwDown(props){
    const [open,setOpen]= useState(false)

    function handleOpen (){
        setOpen(!open)
        }
console.log()
return(
<div className="dropdown-item-list">
                    <h5 onClick={handleOpen}>{props.item.trnimi} <FontAwesomeIcon icon="fa-solid fa-caret-down" size="lg"/></h5>
                    {open&&(<ul>
                        {props.subCate.map(sub => props.item.trnro===sub.trnro && <Link className="link-items"  key={uuid()} onClick={props.handleClose} to={`/category/${props.item.trnro}/${sub.alakategoria}`}><li>{sub.alakategoria}</li></Link>)}
                    </ul>)}

</div>
)
}

export default DropwDown