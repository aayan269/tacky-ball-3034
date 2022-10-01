import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context.jsx/searchcontext";

export default function StateBigBox({title,image,content}){
    const {setImage,setContent,setTtl}=useContext(SearchContext)
    const navigate=useNavigate()
    const handleClick=()=>{
        setImage(image)
        setContent(content)
        setTtl(title)
        return navigate("/detail")
    }
    return (
        <div onClick={handleClick} style={{width:"280px",height:"250px"}}>
               <div style={{width:"100%",height:"150px"}}><Image  src={image} w={"100%"} h={"100%"} alt="error"/></div>
               <div><h3 style={{fontSize:"17px",textAlign:"start"}}>{title}</h3></div>
        </div>
    )
}