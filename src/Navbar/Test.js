import BarProf from "./BarProf";
import Settings from "./Settings";
import ChangeProfile from "./ChangeProfile";
import { useState } from "react";
 



 export default function Stest(props){
     const[count,setCount]=useState(0)
     const increment = () => setCount(prevCount => prevCount + 1);
     let dsa=[];
     for(let i=0; i<count;i++){
         dsa.push(<ChangeProfile increment={increment}/>)
     }
return( 
<div className=" h-auto  w-60  bg-r bg-gray-700 shadow-black shadow-2xl  rounded-lg -z-0 fixed top-0 right-0" onMouseLeave={props.off}  >
    <BarProf/>
    <ul>
    <ChangeProfile increment={increment}/>
    {dsa}
    </ul>
    <Settings/>
</div>)
 }
