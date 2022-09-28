import { Image } from "@chakra-ui/react";

export default function TopStories({title,image,description}){

    return(
        <div style={{width:"470px" ,height:"450px" ,border:"1px solid #e1e1e1"}}>

            <div style={{width:"100%",height:"62%"}}><Image w={"100%"} h={"100%"} src={image} /></div>
            <div style={{width:"100%",height:"38%",fontSize:"13px"}}><h2 style={{textAlign:"start",marginLeft:"5px"}}>{title}</h2><p style={{textAlign:"start",marginLeft:"5px"}}>{description}</p></div>
        </div>
    )
}