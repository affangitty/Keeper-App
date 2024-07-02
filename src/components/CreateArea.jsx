import React,{useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from '@mui/material';

function CreateArea(props) {
  const [a,seta]=useState(false);
  function abc(){
    seta(true);
  }
  return (
    <div>
      <form className="create-note">
        {a&&(<input name="title" onChange={props.titl} value={props.val1} placeholder="Title" />)}
        <textarea name="content" onChange={props.cont} onClick={abc} value={props.val2} placeholder="Take a note..." rows={(a)?"3":"1"} />
        <Zoom in={a}>
          <Fab onClick={props.click}><AddIcon /></Fab>
        </Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
