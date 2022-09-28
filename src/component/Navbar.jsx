import { Image } from "@chakra-ui/react";
import { IoIosHome} from 'react-icons/io';
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

export default function Navbar(){

    var showdate=new Date();
    // var displaytodaydate=showdate.getDate()+"/"+(showdate.getMonth()+1)+"/"+showdate.getFullYear();
    var dt=showdate.toDateString();
     var dispalyTime=showdate.getHours()+":"+showdate.getMinutes()   //+":"+showdate.getSeconds();

    return (
        <div style={{width:"80%",height:"210px",margin:"auto"}}>
            <Image src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg" mt={10} h={80} w={300}/>
            <p style={{fontSize:"12px",fontWeight:"600"}}>{dt} | Last update: {dispalyTime} AM IST</p>
            <hr />
            <div  style={{ width:"100%",height:"40px",display:"flex",justifyContent:"flex-start",gap:"15px"}}>
                <div style={{width:"5%"}}><Link to="/"  style={{textDecoration:"none",color:"black"}}><IoIosHome style={{fontSize:"25px",marginTop:"15%",marginLeft:"50px"}}/></Link></div>
                <div style={{width:"85%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                    <Link style={{textDecoration:"none",color:"black"}} to="/" ><h4 style={{fontWeight:"400",fontSize:"20px"}}>Nation</h4></Link>
                    <Link style={{textDecoration:"none",color:"black"}} to="/business" ><h4 style={{fontWeight:"400",fontSize:"20px"}}>Business</h4></Link>
                    <Link style={{textDecoration:"none",color:"black"}} to="/entertainment" ><h4 style={{fontWeight:"400",fontSize:"20px"}}>Entertainment</h4></Link>
                    <Link style={{textDecoration:"none",color:"black"}} to="/health" ><h4 style={{fontWeight:"400",fontSize:"20px"}}>Health</h4></Link>
                    <Link style={{textDecoration:"none",color:"black"}} to="/science" ><h4 style={{fontWeight:"400",fontSize:"20px"}}>Science</h4></Link>
                    <Link style={{textDecoration:"none",color:"black"}} to="/sports" ><h4 style={{fontWeight:"400",fontSize:"20px"}}>Sports</h4></Link>
                    <Link style={{textDecoration:"none",color:"black"}} to="/technology" ><h4 style={{fontWeight:"400",fontSize:"20px"}}>Technology</h4></Link>
                    <Link style={{textDecoration:"none",color:"black"}} to="/" ><h4 style={{fontWeight:"400",fontSize:"20px"}}><Dropdown/></h4></Link>
                </div>
            </div>
        </div>
    )
}