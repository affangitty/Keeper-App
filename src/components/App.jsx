import React,{ useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [currentT,setCurrentT]=useState("");
  const [currentC,setCurrentC]=useState("");
  const [cur,setcur]=useState([]);
  function onT(event){
    const a=event.target.value;
    setCurrentT(a);
  }
  function onC(event){
    const b=event.target.value;
    setCurrentC(b);
  }
  function addclick(event){
    event.preventDefault();
    setcur((prevItem) => ([...prevItem,{title:currentT,content:currentC}]));
    setCurrentT("");
    setCurrentC("");
  }
  function delclick(id){
    setcur((prevItem)=> prevItem.filter((it,index)=> (id!==index)));
  }
  return (
    <div>
      <Header />
      <CreateArea titl={onT} cont={onC} val1={currentT} val2={currentC} click={addclick} />
      {cur.map((abc,index) => (<Note key={index} id={index} del={delclick} ti={abc.title} con={abc.content} />))}
      <Footer />
    </div>
  );
}

export default App;
