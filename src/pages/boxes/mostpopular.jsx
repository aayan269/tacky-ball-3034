import { Image } from "@chakra-ui/react";


export default function MostPopular({title,image}){

    return(
        <div style={{width:"360px",height:"100px"}}>
        <div style={{width:"360px",height:"100px",display:"flex",justifyContent:"space-between"}}>
           <div style={{height:"100%",width:"62%",fontSize:"13px"}}><h3 style={{marginTop:"25px"}}>{title} </h3></div>
           <div style={{height:"100%",width:"35%"}}><Image src={image} alt="error" w={"100%"} mt={20}/></div>
          
        </div>
        <hr/>
        </div>
    )
}