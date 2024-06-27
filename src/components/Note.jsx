import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.ti}</h1>
      <p>{props.con}</p>
      <button onClick={()=> (props.del(props.id))}>DELETE</button>
    </div>
  );
}

export default Note;
