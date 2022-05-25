//<img  className=" w-10" src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"/>

import DropDown from "./DropDown"
import { useState } from "react"
import Stest from "./Test"
export default function Profile(){
    const[drop,newDrop]=useState("start")

    
    return(
        <div>
            {drop==="start" &&(
            <DropDown on={()=>newDrop("on")} />
            )}
            {drop==="on"&&<Stest off={()=>newDrop("start")} />}
            

            </div>
        
    )

}
