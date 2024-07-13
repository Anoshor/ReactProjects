import React from "react";
import './App.css'
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import { Add } from "@mui/icons-material";



function CreateArea(props) {

    const [isExpanded, setExpanded] = React.useState(false);
    
    function expandfn() {
        setExpanded(true);
    }

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    function submitNode(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }


  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" value = {note.title} onChange = {handleChange} placeholder="Title" />}
        <textarea onClick = {expandfn} name="content" value = {note.content} onChange = {handleChange} placeholder="Take a note..." rows={isExpanded? 3:1} />
        <Zoom in={isExpanded}>
        <Fab onClick = {submitNode} style={{fontSize : "1.3rem"}}>
            <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
