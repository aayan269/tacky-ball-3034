import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context.jsx/searchcontext";
export default function Column({title,image,content}){
    const {setImage,setContent,setTtl}=useContext(SearchContext)
    const navigate=useNavigate()
    const handleClick=()=>{
        setImage(image)
        setContent(content)
        setTtl(title)
        return navigate("/detail")
    }
    return(
        <div onClick={handleClick} style={{width:"360px",height:"120px"}}>
             <div style={{width:"360px",height:"100px",display:"flex",justifyContent:"space-between"}}>
           <div style={{height:"100%",width:"62%",fontSize:"13px"}}><h3 style={{marginTop:"20px"}}>{title}</h3></div>
           <div style={{height:"100%",width:"35%"}}><Image src={image} alt="error" w={"100%"} mt={20} borderRadius={"60%"}/></div>
          
        </div>
        <hr/>
        </div>
    )
}