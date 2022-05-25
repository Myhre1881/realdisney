import Menu from "./Menu"
import Profile from "./Profile"



export default function NavBar(){
    
    
    return(
        <div className=" bg-gray-900 flex h-24 scro  items-center justify-between fixed top-0 w-full z-50  ">
            <div className="">
            <Menu/>

            </div>
            
            
            <Profile/>

        </div>
    )
};

