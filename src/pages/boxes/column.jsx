import { Image } from "@chakra-ui/react";

export default function Column({title,image}){

    return(
        <div style={{width:"360px",height:"120px"}}>
             <div style={{width:"360px",height:"100px",display:"flex",justifyContent:"space-between"}}>
           <div style={{height:"100%",width:"62%",fontSize:"13px"}}><h3 style={{marginTop:"20px"}}>{title}</h3></div>
           <div style={{height:"100%",width:"35%"}}><Image src={image} alt="error" w={"100%"} mt={20} borderRadius={"60%"}/></div>
          
        </div>
        <hr/>
        </div>
    )
}