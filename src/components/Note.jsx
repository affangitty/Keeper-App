import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.ti}</h1>
      <p>{props.con}</p>
      <button onClick={()=> (props.del(props.id))}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
