import { Image } from "@chakra-ui/react";


export default function TechnologyBox({title,image,description}){

    return(
        <div style={{width:"240px",height:"300px",margin:"auto"}}>
            <Image style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} w={"100%"} h={"50%"} src={image} alt="error"  />
             <h2 style={{fontSize:"15px",textAlign:"start",marginLeft:"10px"}}></h2>
             <h2 style={{fontSize:"15px",textAlign:"start",marginLeft:"10px",overflow:"hidden"}}>{description}</h2>
        </div>
    )
}