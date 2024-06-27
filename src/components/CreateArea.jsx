import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input name="title" onChange={props.titl} value={props.val1} placeholder="Title" />
        <textarea name="content" onChange={props.cont} value={props.val2} placeholder="Take a note..." rows="3" />
        <button onClick={props.click}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
