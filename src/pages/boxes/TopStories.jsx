import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context.jsx/searchcontext";

export default function TopStories({title,image,description,content}){
    const {setImage,setContent,setTtl}=useContext(SearchContext)
    const navigate=useNavigate()
    const handleClick=()=>{
        setImage(image)
        setContent(content)
        setTtl(title)
        return navigate("/detail")
    }
    

    return(
        <div style={{width:"470px" ,height:"450px" ,border:"1px solid #e1e1e1"}} onClick={handleClick}>

            <div style={{width:"100%",height:"62%"}}><Image w={"100%"} h={"100%"} src={image} alt="error"/></div>
            <div style={{width:"100%",height:"38%",fontSize:"13px"}}><h2 style={{textAlign:"start",marginLeft:"5px"}}>{title}</h2><p style={{textAlign:"start",marginLeft:"5px"}}>{description}</p></div>
        </div>
    )
}