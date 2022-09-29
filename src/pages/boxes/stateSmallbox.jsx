import { Image } from "@chakra-ui/react";


export default function StatesmallBox({image,title}){

    return(
        <div style={{width:"280px",height:"100px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{width:"30%",height:"80px"}}><Image src={image} w={"100%"} h={"100%"} /></div>
            <div style={{width:"65%",height:"80px"}}><h3 style={{fontSize:"14px",textAlign:"start",marginBottom:"10px"}}>{title}</h3></div>
        </div>
    )
}