import {useState} from "react";

function State() {
  const[name,setName]=useState("Mani");
  const[age,setAge]=useState(21);
  const[native,setNative]=useState("Tenkasi");
  return(
    <div>
      {name}{age}{native}
      <button onClick={()=>setName("Dhoni")}>updateName</button>
      <button onClick={()=>setAge("40")}>updateAge</button>
      <button onClick={()=>setNative("Ranji")}>updateNative</button>
    </div>
  )
}

export default State