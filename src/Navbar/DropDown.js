

 const DropDown =(props)=>{
    return (
        
        <div className="relative right-1/2">
            <input type="image" onMouseEnter={props.on} onMouseLeave={props.off} className=" border-2  rounded-3xl border-white w-10 " src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"/>
        </div>
    
    )
}
export default DropDown
