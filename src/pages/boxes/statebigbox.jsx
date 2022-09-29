import { Image } from "@chakra-ui/react";


export default function StateBigBox({title,image}){

    return (
        <div style={{width:"280px",height:"250px"}}>
               <div style={{width:"100%",height:"150px"}}><Image  src={image} w={"100%"} h={"100%"}/></div>
               <div><h3 style={{fontSize:"17px",textAlign:"start"}}>{title}</h3></div>
        </div>
    )
}