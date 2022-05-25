

const footerList=[
    "Privacy Policy",
    "Cookies Policy",
    "UK & EU Privacy Rights",
    "Subscriber Agreement",
    "Help",
    "Supported Devices",
    "About Us",
    "Interest-based Ads",
    "Manage Preferences"
]


export default function Footer(){
    const items= footerList.map(i=> <li className="mx-4 text-xs text-white">{i}</li>)
    return(
        <div className=" bg-black h-40 grid place-items-center">
            
            <div className="w-1/5">
                <h1 className="text-xl h-full text-center text-white">LOGO HERE</h1>
                
            </div>
            <ul className="flex flex-row">
            {items}
            </ul>
            <div className="text-white">©Disney. All rights reserved.</div>
        </div>
    )
}