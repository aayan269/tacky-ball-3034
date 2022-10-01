import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context.jsx/searchcontext";

export default function StatesmallBox({image,title,content}){
    const {setImage,setContent,setTtl}=useContext(SearchContext)
    const navigate=useNavigate()
    const handleClick=()=>{
        setImage(image)
        setContent(content)
        setTtl(title)
        return navigate("/detail")
    }
    return(
        <div onClick={handleClick} style={{width:"280px",height:"100px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{width:"30%",height:"80px"}}><Image src={image} w={"100%"} h={"100%"} alt="error" /></div>
            <div style={{width:"65%",height:"100px"}}><h3 style={{fontSize:"14px",textAlign:"start",marginBottom:"10px"}}>{title}</h3></div>
        </div>
    )
}