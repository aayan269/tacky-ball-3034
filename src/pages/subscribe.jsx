import { Button } from "@chakra-ui/react";


export default function Subscribe(){


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
                       <Button bgColor={"#3967d6"} border={"0"} h={30} w={180} borderRadius={5} color={"white"} > Save up to 55%</Button>
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
                       <Button bgColor={"#3967d6"} border={"0"} h={30} w={180} borderRadius={5} color={"white"}> Save up to 52%</Button>
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
                       <Button bgColor={"#3967d6"} border={"0"} h={30} w={180} borderRadius={5} color={"white"}> Save up to 52%</Button>
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