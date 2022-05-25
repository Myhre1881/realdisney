
import { useState } from "react"
import { ButtonLeft } from "./ButtonLeft"
import { ButtonRight } from "./ButtonRight"
import Picture from "./Picture"
const pictures=[
    {
        name:"test1",
        picture:"https://cdn3.whatculture.com/images/2015/09/3vpNFOuc-600x338.jpg "
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test3",
        picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pleiades_large.jpg/800px-Pleiades_large.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },
    {
        name:"test2",
        picture:"https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg"
    },

]

export default function Display(props){
    const [pic,setPic]=useState(0)
    const leftChange=()=>{
        if(pic==0){
            setPic(14)
        }else{
            setPic(pic-1)
        }
    }
    const rightChange=()=>{
        if(pic==pictures.length-1){
            setPic(0)
        }else{
            setPic(pic+1)
        }
    }
    
   
return(
    <div className="grid place-items-center my-8">
    <div className=" bg-transparent h-80 flex flex-row  justify-between w-full">
        
    <ButtonLeft leftChange={leftChange}/>
    <Picture current={pictures[pic].picture} curr={pic}/>
    <ButtonRight rightChange={rightChange}/>
    </div>
    </div>
)
};