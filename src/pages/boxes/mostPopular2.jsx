import { Image } from "@chakra-ui/react";


export default function MostPopular2({title,image}){

    return(
        <div style={{width:"290px",height:"90px"}}>
        <div style={{width:"280px",height:"90px",display:"flex",justifyContent:"space-between" ,overflowY:"hidden"}}>
        <div style={{height:"100%",width:"35%"}}><Image src={image} alt="error" w={"100%"} h={70} mt={25} /></div>
          
           <div style={{height:"100%",width:"62%",fontSize:"11px"}}><h3 style={{marginTop:"25px"}}>{title} </h3></div>
          
        </div>
        <hr/>
        </div>
    )
}