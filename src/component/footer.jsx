import { Button, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosSearch } from 'react-icons/io';
export default function Footer(){


    return(
        <div style={{width:"100%",height:"240px",backgroundColor:"rgb(242,242,242)"}}><div style={{width:"30px",height:"40px"}}>   </div>
           <div style={{width:"34%",margin:"auto",height:"50px",display:"flex",justifyContent:"space-between"}}><Input w={400} h={25} mt={10} variant='outline' placeholder='Search with Google' /><Button w={70} mt={10} h={30} border={0} bgColor={"#cecece"}><IoIosSearch style={{fontSize:"20px",color:"white"}}/></Button></div>
           <div style={{width:"80%",margin:"auto",height:"50px",display:"flex",justifyContent:"space-around"}}>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>HOME</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>ASIANAGE</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>ANDHRABHOOMI</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>FINANCIAL</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>ABOUT US</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>CONATCT US</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>CLASSIFIED</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>FEEDBACK</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>CAREERS</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>E-PAPER</h4></Link><hr/>
               <Link style={{textDecoration:"none",color:"rgb(114,120,131)"}} ><h4 style={{fontSize:"14px",marginTop:"14px"}}>PRIVACY POLICY</h4></Link>
               
           </div>
           <div style={{width:"40%",height:"60px",marginLeft:"150px"}}><h5 style={{fontSize:"20px",fontWeight:"lighter",textAlign:"start",marginTop:"-2px"}}>Copyright © 2015 - 2022 Deccan Chronicle.<br/>
Designed, Developed & Maintained By Daksham</h5></div>

        </div>
    )
}