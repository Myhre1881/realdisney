import { useState } from "react"


export default function Companies(){
    const [asd,setAsd]=useState(0);
    let a=[
        "https://graffica.info/wp-content/uploads/2018/11/disneyplus-1024x577.jpg","https://i.gifer.com/origin/fa/fa9e27a7534060df383ab54354fcead3_w200.gif"
    ]
    return(
        <div onMouseOver={()=>setAsd(1)} onMouseLeave={()=>setAsd(0)} className="  drop-shadow-2xl bg-gray-900 shadow-black shadow-2xl h-24 w-44 rounded-xl hover:border-4 hover:border-gray-50  ">
            <input type="image" className=" h-full w-full m-0 rounded-xl" src={a[asd]} alt="asd"/>

        </div>
    )
}

//grid place-items-center