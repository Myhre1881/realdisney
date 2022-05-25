


export default function SmallPic(props){
    return(
        <div className=" shadow-2xl shadow-black grid items-center h-full w-1/5 hover:border-gray-50 hover:border-4 rounded-xl ">
             <input type="image" className=" h-full w-full m-0 rounded-xl " src={props.src}/>

        </div>
    )
}