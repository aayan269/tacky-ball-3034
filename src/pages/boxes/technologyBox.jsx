import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context.jsx/searchcontext";

export default function TechnologyBox({title,image,description,content}){
    const {setImage,setContent,setTtl}=useContext(SearchContext)
    const navigate=useNavigate()
    const handleClick=()=>{
        setImage(image)
        setContent(content)
        setTtl(title)
        return navigate("/detail")
    }
    return(
        <div style={{width:"240px",height:"340px",margin:"auto",marginTop:"10px"}} onClick={handleClick}>
            <Image style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} w={"100%"} h={"40%"} src={image} alt="error"  />
             <h2 style={{fontSize:"15px",textAlign:"start",marginLeft:"10px"}}></h2>
             <h2 style={{fontSize:"15px",textAlign:"start",marginLeft:"10px",overflow:"hidden"}}>{description}</h2>
        </div>
    )
}