import {  Image } from "@chakra-ui/react";

import axios from "axios";
import { useEffect, useReducer } from "react";
import Column from "./boxes/column";
import MostPopular from "./boxes/mostpopular";
import MostPopular2 from "./boxes/mostPopular2";
import StateBigBox from "./boxes/statebigbox";
import StatesmallBox from "./boxes/stateSmallbox";
import TechnologyBox from "./boxes/technologyBox";
import TopStories from "./boxes/TopStories";

const initial={
    isLoading:true,
    popularData:[],
    commonData:[],
    nationalData:[],
    columnData:[],
    southData:[],
    southData2:[],
    educationData:[],
    footballData:[],
    cricketData:[],
    technologyData:[],
    worldData:[],
    japanData:[]
}
const reducer=(state,action)=>{
    //console.log(state)

    switch(action.type){
       case "POPULARDATA": return{ ...state,popularData:action.payload};
       case "COMMONDATA": return {...state,commonData:action.payload};
       case "NATIONALDATA": return {...state,nationalData:action.payload};
       case "COLUMNDATA": return {...state,columnData:action.payload};
       case "SOUTHDATA": return {...state,southData:action.payload};
       case "SOUTHDATA2": return {...state,southData2:action.payload};
       case "EDUCATIONDATA": return {...state,educationData:action.payload};
       case "FOOTBALLDATA": return {...state,footballData:action.payload};
       case "CRICKETDATA": return {...state,cricketData:action.payload};
       case "TECHNOLOGYDATA": return {...state,technologyData:action.payload};
       case "WORLDDATA": return {...state,worldData:action.payload};
       case "JAPANDATA": return {...state,japanData:action.payload};
       default: return state;
    }
}

const POPULAR=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=10&page=4&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"POPULARDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const COMMON=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=15&page=2&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
        //console.log(res.data.articles)
        dispatch({type:"COMMONDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const NATIONAL=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=3&page=2&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"NATIONALDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const COLUMN=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&q=book&pageSize=10&page=1&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"COLUMNDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const SOUTH=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=flu&category=health&pageSize=4&page=1&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"SOUTHDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const SOUTH2=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=virus&category=health&pageSize=4&page=1&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"SOUTHDATA2" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const EDUCATION=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=virus&category=health&pageSize=4&page=4&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"EDUCATIONDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const FOOTBALL=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=malaria&category=health&pageSize=4&page=1&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"FOOTBALLDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const CRICKET=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=malaria&category=health&pageSize=3&page=2&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"CRICKETDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const TECHNOLOGY=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=cancer&category=health&pageSize=4&page=4&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"TECHNOLOGYDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const WORLD=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=heart&category=health&pageSize=4&page=4&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"WORLDDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const JAPAN=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=heart&category=health&pageSize=4&page=1&apiKey=1ec81a65984d4fdabf4a7bb01f849c47`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"JAPANDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
export default function Health (){
const [state,dispatch]=useReducer(reducer,initial)

    useEffect(()=>{
POPULAR(dispatch)
COMMON(dispatch)
NATIONAL(dispatch)
COLUMN(dispatch)
SOUTH(dispatch)
SOUTH2(dispatch)
EDUCATION(dispatch)
FOOTBALL(dispatch)
CRICKET(dispatch)
TECHNOLOGY(dispatch)
WORLD(dispatch)
JAPAN(dispatch)
    },[])
   // console.log(state)

    return (
        <>
       <div style={{display:"flex",justifyContent:"space-between",width:"80%",height:"1450px",margin:"auto"}}>
         <div style={{width:"67%",height:"100%",display:"flex",justifyContent:"space-between",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
            <div style={{width:"60%",height:"100%"}}>
            <h2 style={{textAlign:"start",marginLeft:"5%",marginTop:"4%"}}>TOP STORIES</h2>
            <div style={{width:"190px",height:"3px",marginLeft:"5%",backgroundColor:"red",marginTop:"-4%"}}></div>
            
            <div style={{marginTop:"5px"}}>
            {
                state.nationalData?.map((el)=>(
                    <TopStories content={el.content} key={el.description } title={el.title } description={el.description} image={el.urlToImage }/>
                ))
              }

                </div>
             
            </div>
            <div style={{width:"39%",height:"100%"}}>
            <div style={{marginLeft:"10px"}}>
               {
                state.commonData?.map((el)=>(
                    <MostPopular2 content={el.content} key={el.description } title={el.title } image={el.urlToImage }/>
                ))
               }</div>
            </div>
         </div>
         <div style={{width:"32.5%",height:"100%"}}>
            <h2 style={{textAlign:"start",marginLeft:"5%"}}>MOST POPULAR</h2>
            <div style={{width:"190px",height:"3px",marginLeft:"5%",backgroundColor:"red",marginTop:"-5%"}}></div>
             <div style={{marginLeft:"10px"}}>
             {
                state.popularData?.map((el)=>(
                    <MostPopular content={el.content} key={el.description } title={el.title } image={el.urlToImage } />
                ))
             }
             </div>
             <h2 style={{textAlign:"start",marginLeft:"5%"}}>COLUMNS</h2>
            <div style={{width:"190px",height:"3px",marginLeft:"5%",backgroundColor:"red",marginTop:"-5%"}}></div>
            
            <div style={{marginLeft:"10px"}}>
                {
                    state.columnData?.map((el)=>(
                        <Column content={el.content} key={el.description } title={el.title } image={el.urlToImage }/>
                    ))
                }
                 
            </div>
            
         </div>
       </div>
       <div style={{width:"80%",margin:"auto"}}><hr/></div>

       <div style={{width:"80%",margin:"auto",display:"flex"}}>
        <div><h2 style={{textAlign:"start",marginLeft:"5%"}}>CARTOON OF THE DAY</h2><div style={{width:"190px",height:"3px",marginLeft:"5%",backgroundColor:"red",marginTop:"-5%"}}></div>
            </div>
            <div style={{marginLeft:"250px"}}><h2 style={{textAlign:"start",marginLeft:"5%"}}>CARTOON POINT</h2><div style={{width:"190px",height:"3px",marginLeft:"5%",backgroundColor:"red",marginTop:"-5%"}}></div>
            </div>
       </div>
       <div style={{width:"80%",margin:"auto",height:"320px",display:"flex",alignItems:"center",gap:"15px"}}>
             <div style={{width:"40%",height:"80%"}}><Image src={"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/69a23cfbe318c580257945c06457086e5d743016-tc-img-web.jpg"} alt="err" w={"100%"} h={"100%"} /></div>
             <div style={{width:"25%",height:"80%"}}><Image src={"https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/51bdde747e8a99f251d6dbe269c0557d82b5b46d-tc-img-web.jpg"} alt="err" w={"100%"} h={"100%"} /></div>
       </div>
       <div style={{width:"80%",margin:"auto"}}><hr/></div>
       <div style={{width:"80%",margin:"auto"}}>
       <div style={{display:"flex",flexDirection:"column"}}><h2 style={{textAlign:"start"}}>SOUTH</h2>
       <div style={{width:"190px",height:"3px",backgroundColor:"red"}}></div>
            </div></div>
            <div style={{width:"80%",height:"350px",margin:"auto",marginTop:"15px"}}>
                <div style={{width:"100%",height:"250px",display:"flex",justifyContent:"space-around"}}>{state.southData?.map((el)=>(<StateBigBox content={el.content} key={el.description } title={el.title } image={el.urlToImage }/>))}</div>
                <div style={{width:"100%",height:"99px",display:"flex",justifyContent:"space-around"}}>{state.southData2?.map((el)=>(<StatesmallBox content={el.content} key={el.description } title={el.title } image={el.urlToImage} />))}</div>
            </div>

            <div style={{width:"80%",margin:"auto"}}><hr/></div>
            <div style={{width:"80%",margin:"auto"}}>
       <div style={{display:"flex",flexDirection:"column"}}><h2 style={{textAlign:"start"}}>JOBS AND EDUCATION</h2>
       <div style={{width:"190px",height:"3px",backgroundColor:"red"}}></div>
            </div></div>
            <div style={{width:"80%",margin:"auto",height:"100px",display:"flex",justifyContent:"space-around",marginTop:"10px"}}>{state.educationData?.map((el)=>(<StatesmallBox content={el.content} key={el.description } title={el.title } image={el.urlToImage} />))}</div>
          <div style={{width:"80%",margin:"auto"}}><hr/></div>
            
            <div style={{width:"80%",margin:"auto"}}>
       <div style={{display:"flex",flexDirection:"column"}}><h2 style={{textAlign:"start"}}>MALARIA</h2>
       <div style={{width:"190px",height:"3px",backgroundColor:"red"}}></div>
            </div></div>
            <div style={{width:"80%",height:"350px",margin:"auto",marginTop:"15px"}}>
                <div style={{width:"100%",height:"250px",display:"flex",justifyContent:"space-around"}}>{state.footballData?.map((el)=>(<StateBigBox content={el.content} key={el.description } title={el.title } image={el.urlToImage }/>))}</div>
                <div style={{width:"100%",height:"99px",display:"flex",justifyContent:"space-around"}}>{state.cricketData?.map((el)=>(<StatesmallBox content={el.content} key={el.description } title={el.title } image={el.urlToImage } />))}</div>
            </div>
            <div style={{width:"80%",margin:"auto"}}><hr/></div>

            <div style={{width:"80%",margin:"auto"}}>
       <div style={{display:"flex",flexDirection:"column"}}><h2 style={{textAlign:"start"}}>CANCER</h2>
       <div style={{width:"190px",height:"3px",backgroundColor:"red"}}></div>
            </div></div>

            <div style={{width:"80%",height:"320px",margin:"auto",display:"flex",justifyContent:"space-around"}}>{state.technologyData?.map((el)=>(<TechnologyBox content={el.content}  key={el.description } description={el.description} title={el.title } image={el.urlToImage }/>))}</div>
            <div style={{width:"80%",margin:"auto"}}><hr/></div>


            <div style={{width:"80%",margin:"auto"}}>
       <div style={{display:"flex",flexDirection:"column"}}><h2 style={{textAlign:"start"}}>CARDIAC</h2>
       <div style={{width:"190px",height:"3px",backgroundColor:"red"}}></div>
            </div></div>
            <div style={{width:"80%",height:"350px",margin:"auto",marginTop:"15px"}}>
                <div style={{width:"100%",height:"250px",display:"flex",justifyContent:"space-around"}}>{state.worldData?.map((el)=>(<StateBigBox content={el.content} key={el.description } title={el.title } image={el.urlToImage }/>))}</div>
                <div style={{width:"100%",height:"99px",display:"flex",justifyContent:"space-around"}}>{state.japanData?.map((el)=>(<StatesmallBox content={el.content} key={el.description } title={el.title } image={el.urlToImage } />))}</div>
            </div>
            <div style={{width:"80%",margin:"auto"}}><hr/></div>

       </>
    )
}
