import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";

const initial={name:"",password:""}

export default function Subscribe(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)
const [formData,setFormData]=useState(initial)
const navigate=useNavigate()

const handleChange=(e)=>{
const {name,value}=e.target
setFormData({...formData,[name]:value})
}

const handleSubmit=()=>{
    console.log(formData)
    axios.post(`https://reqres.in/api/login`,{
    email:formData.name,
    password:formData.password
    }).then((res)=>{
       if(res.data.token){
        return navigate("/")
       }
    })
}

    return(
        <div>
            <div style={{width:"80%",height:"30px",margin:"auto",marginTop:"50px",fontSize:"35px",fontWeight:"700",marginTop:"55px"}}>Choose the best plan for your needs</div>
                <p>Invest in trust with an Indian Express digital subscription that keeps you ahead of the curve</p>

                <div style={{width:"60%",height:"600px",margin:"auto",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                    <div style={{width:"30%",height:"450px",borderRadius:"10px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <div style={{width:"80%",height:"30px",fontSize:"20px",fontWeight:"700",marginTop:"15px",marginLeft:"10%"}}>Digital Only</div>
                <p style={{marginLeft:"3%",marginTop:"30px"}}><p>Get unlimited access to all our journalism online (minus epaper)</p></p>
                       <div style={{width:"60%",margin:"auto"}}><hr/></div>
                       <p>Plan starts from</p>
                       <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}><h2>₹ 66 </h2> <h5>/per month</h5></div>
                       {/* <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
        Some other content that'll receive focus on close.
      </Box> */}
      <Button bgColor={"#3967d6"} border={"0"} h={30} w={180} borderRadius={5} color={"white"} onClick={onOpen} > Save up to 55%</Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent width={"30%"} style={{marginTop:"60px",padding:"20px"}} h={"500px"} margin={"auto"} boxShadow ={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"} backgroundColor={"white"}>
        {/* <ModalCloseButton w={20} h={20} ml={420} /> */}
          <ModalHeader m={"auto"} mt={"-20px"}><h2>LOGIN</h2></ModalHeader>
          <ModalBody style={{width:"80%",margin:"auto",marginBottom:"280px",display:"flex",flexDirection:"column",gap:"25px"}}>
              <label style={{marginLeft:"35px",height:"6px"}}>Email</label>
            <Input w={"80%"} m={"auto"} h={35} borderRadius={"10"} type="text" placeholder="enter email" name="name" value={formData.name} onChange={handleChange}/>
            <label style={{marginLeft:"35px",height:"6px",marginTop:"-20px"}}>Password</label>
            <Input w={"80%"} type="password" m={"auto"} h={35} borderRadius={"10"} placeholder="enter password" name="password" value={formData.password} onChange={handleChange}  />
             <Link style={{textDecoration:"none",color:"black",marginLeft:"35px",height:"30px",marginTop:"-40px",fontWeight:"500"}} ><p>Forgot your Password?</p></Link>
            <Button  w={"80%"} m={"auto"} h={45} borderRadius={"25"} backgroundColor={"#e60023"} color={"white"} border={"0px"} onClick={handleSubmit} >LOGIN</Button>
            <p style={{marginLeft:"165px",height:"10px",marginTop:"-15px",marginBottom:"-6px"}}>OR</p>
            <Button  w={"80%"} m={"auto"} h={45} borderRadius={"25"} fontSize={"14px"}  border={"1px"}><FcGoogle style={{height:"35px",width:"25px",marginBottom:"3px",marginRight:"20px"}} />Continue with Google</Button>
             <p style={{fontSize:"11px",marginLeft:"70px"}}>By continuing, you agree to Deccan chronicles</p>
             <h2 style={{fontSize:"12px",marginLeft:"90px",marginTop:"-15px"}}>Terms of service | privacy policy</h2>
        </ModalBody>
        </ModalContent>
      </Modal>
                       <div style={{width:"60%",margin:"auto"}}><hr/></div>
                       <div >
                        <h5 >Add-lite experience across platform</h5>
                        <h5 >Access to daily premium stories</h5>
                        <h5 >Access to exclusive newsPaper </h5>
                       </div>
                    </div>
                   
                    <div style={{width:"30%",height:"450px",borderRadius:"10px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <div style={{width:"80%",height:"30px",fontSize:"20px",fontWeight:"700",marginTop:"15px",marginLeft:"10%"}}>All Access</div>
                <p style={{marginLeft:"3%",marginTop:"30px"}}><p>Digital + E-paper subscription so that you don’t miss anything</p></p>
                       <div style={{width:"60%",margin:"auto"}}><hr/></div>
                       <p>Plan starts from</p>
                       <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}><h2>₹ 83 </h2> <h5>/per month</h5></div>
                       <Button bgColor={"#3967d6"} border={"0"} h={30} w={180} borderRadius={5} color={"white"} onClick={onOpen}> Save up to 52%</Button>
       
                       <div style={{width:"60%",margin:"auto"}}><hr/></div>
                       <div >
                        <h5 >All digital plan</h5>
                        <h5 >Access on 4 devices simultaneously</h5>
                        <h5 >Access to e-paper archives </h5>
                       </div>
                    </div>
                   
                    <div style={{width:"30%",height:"450px",borderRadius:"10px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    <div style={{width:"80%",height:"30px",fontSize:"20px",fontWeight:"700",marginTop:"15px",marginLeft:"10%"}}>ePaper Only</div>
                <p style={{marginLeft:"3%",marginTop:"30px"}}><p>Access to the daily e-replica edition (minus Express Digital)</p></p>
                       <div style={{width:"60%",margin:"auto"}}><hr/></div>
                       <p>Plan starts from</p>
                       <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}><h2>₹ 70 </h2> <h5>/per month</h5></div>
                       <Button bgColor={"#3967d6"} border={"0"} h={30} w={180} borderRadius={5} color={"white"} onClick={onOpen} > Save up to 52%</Button>
                       <div style={{width:"60%",margin:"auto"}}><hr/></div>
                       <div >
                       <h5 >All digital plan</h5>
                        <h5 >Access on 4 devices simultaneously</h5>
                        <h5 >Exclusive invites for the IE events</h5>
                       </div>
                    </div>
                </div>
        
        
        </div>
    )
}