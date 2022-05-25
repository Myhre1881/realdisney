import Dots from "./Dots"

export default function Picture(props){
 return(
     <div className="h-full w-10/12 ">
         <input type="image" className=" shadow-2xl shadow-black w-full h-full rounded-lg hover:border-white hover:border-4 " src={props.current}/>
         <Dots current={props.curr}/>

     </div>
 )
}
