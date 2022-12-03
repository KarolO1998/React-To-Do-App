import React from "react";
import { useState } from "react";


const AddList = ({onAdd}) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    
    const onSubmit = (e) => {

        e.preventDefault();       

        if(!text) {
            alert("Please add a to do");
            return;

        }else{
            alert("Youve added a to do")
        }

        onAdd({text, day});

        setText("");
        setDay("");
    }
    
    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>To Do</label>
          <input
            type="text"
            placeholder="Add To Do"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="Save To Do" className="btn btn-block"></input>
      </form>
    );
  };

  export default AddList;