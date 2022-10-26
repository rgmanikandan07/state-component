import {useState,useEffect} from 'react'

function Lifecycle() {
    const[name,setName]=useState("Mani");
    const[age,setAge]=useState(21);
    const[native,setNative]=useState("Tenkasi");

    useEffect(()=>{
        console.log("component did update");
    },{})
  return (
    <div>
      {name}{age}{native}
      <button onClick={()=>setName("Dhoni")}>updateName</button>
      <button onClick={()=>setAge("40")}>updateAge</button>
      <button onClick={()=>setNative("Ranji")}>updateNative</button>
    </div>
  )
}

export default Lifecycle