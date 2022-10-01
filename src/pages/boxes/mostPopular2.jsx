import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context.jsx/searchcontext";

export default function MostPopular2({title,image,content}){
    const {setImage,setContent,setTtl}=useContext(SearchContext)
    const navigate=useNavigate()
    const handleClick=()=>{
        setImage(image)
        setContent(content)
        setTtl(title)
        return navigate("/detail")
    }
    return(
        <div onClick={handleClick} style={{width:"290px",height:"90px"}}>
        <div style={{width:"280px",height:"90px",display:"flex",justifyContent:"space-between" ,overflowY:"hidden"}}>
        <div style={{height:"100%",width:"35%"}}><Image src={image} alt="error" w={"100%"} h={70} mt={25} /></div>
          
           <div style={{height:"100%",width:"62%",fontSize:"11px"}}><h3 style={{marginTop:"25px"}}>{title} </h3></div>
          
        </div>
        <hr/>
        </div>
    )
}