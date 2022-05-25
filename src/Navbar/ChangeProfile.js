

export default function ChangeProfile(props){
    
    return(
        <div className="h-20 flex flex-row items-center">
            <button className=" h-auto w-auto  rounded-full" onClick={props.increment}>
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            </button>
    
    <h1 className="text-white px-7">Name</h1>
        </div>
    )
}