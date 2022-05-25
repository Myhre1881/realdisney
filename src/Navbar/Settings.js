const settingList=[
    {name:"Edit Profile"},
    {name:"Appsettings"},
    {name:"Account"},
    {name:"Help"},
    {name:"Logout"}

]


export default function Settings(props){
    const items=settingList.map(i=> <li className="  text-left p-3.5 text-amber-50 hover:text-xl transition-all duration-200 hover:animate-pulse"><a href="">{i.name}</a></li>)
    return(

        <ul className=" text-center border-t  border-white">
        {items}
        </ul>
    )
}