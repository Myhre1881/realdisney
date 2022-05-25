




export default function Dots(props){
    const colorDots=[
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
        {
            color:"gray"
        },
    
    ]
    for (let i =0; i < colorDots.length;i++) {
        if(props.current==i){
            colorDots[i].color="white"
        }  
    }

    const items=colorDots.map(i=><svg xmlns="http://www.w3.org/2000/svg" style={i}className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
  </svg>)
    return(
        <div className=" float-right flex flex-row">
            {items}
        </div>
    )
}