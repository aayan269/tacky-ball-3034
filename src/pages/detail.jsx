import { Image } from "@chakra-ui/react"
import { useContext } from "react"
import { SearchContext } from "../context.jsx/searchcontext"


export default function Details(){
const {image,content,ttl}=useContext(SearchContext)
console.log(ttl,image,content)
let data=[...content]
console.log(data)
    return (
        <div style={{border:"1px solid",width:"55%",height:"800px",margin:"auto",marginTop:"50px"}}>
            <h2>{ttl}</h2>
            <Image src={image} alt="error" w={"100%"}/>
            <p>{content}</p>
        </div>
    )
}