 export const ButtonRight=(props)=>{
     return(
        <div className=" bg-transparent flex  items-center">
            <button className="pr-14 text-white" onClick={props.rightChange}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
            </button>
        </div>
     )
 }
 