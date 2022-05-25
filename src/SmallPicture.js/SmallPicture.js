import { useState } from "react";
import SmallBLeft from "./SmallBLeft";
import SmallBRight from "./SmallBRight";
import SmallPic from "./SmallPic";

const picPic=[
    {
        Pic:0,
        img:"https://graffica.info/wp-content/uploads/2018/11/disneyplus-1024x577.jpg"
    },
    {
        Pic:1,
        img:"https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"
    },
    {
        Pic:2,
        img:"https://tinyjpg.com/images/social/website.jpg"
    },
    {
        Pic:3,
        img:"https://www.imgonline.com.ua/examples/enlarged-photo.jpg"
    },
    {
        Pic:4,
        img:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"
    },
    {
        Pic:5,
        img:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"
    },
    {
        Pic:6,
        img:"https://graffica.info/wp-content/uploads/2018/11/disneyplus-1024x577.jpg"
    },
    {
        Pic:7,
        img:"https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"
    },
    {
        Pic:8,
        img:"https://tinyjpg.com/images/social/website.jpg"
    },
    {
        Pic:9,
        img:"https://raulperez.tieneblog.net/wp-content/uploads/2015/09/tux.jpg"
    },
    {
        Pic:10,
        img:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"
    },
    {
        Pic:11,
        img:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"
    },
    {
        Pic:12,
        img:"https://graffica.info/wp-content/uploads/2018/11/disneyplus-1024x577.jpg"
    },
    {
        Pic:13,
        img:"https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"
    },
    {
        Pic:14,
        img:"https://tinyjpg.com/images/social/website.jpg"
    },
    {
        Pic:15,
        img:"https://raulperez.tieneblog.net/wp-content/uploads/2015/09/tux.jpg"
    },
    {
        Pic:16,
        img:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"
    },
    {
        Pic:17,
        img:"https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"
    },
]


export default function SmallPicture(props){
    const[dis,setDis]=useState(0)
    const handleL=()=>{
        setDis(dis-1)

    }
    const handleR=()=>{
        setDis(dis+1)
    }
    const items=[
        <SmallPic src={picPic[0+dis].img}/>,
        <SmallPic src={picPic[1+dis].img}/>,
        <SmallPic src={picPic[2+dis].img}/>,
        <SmallPic src={picPic[3+dis].img}/>

    ]
    return(
       
        <div className=" my-32">
            <h1 className=" mx-28 -my-10 font-extrabold text-2xl  text-white">EXAMPLE TEXT</h1>
            
    <div className=" my-16 h-44 flex flex-row justify-between ">
        
        <SmallBLeft lClick={handleL} count={dis}/>
        {items}
        <SmallBRight rClick={handleR} count={dis}/>
    </div>
    </div>

    )

}

