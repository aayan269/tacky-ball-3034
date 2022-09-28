import { Center } from "@chakra-ui/react";
import { Action } from "@remix-run/router";
import axios from "axios";
import { useEffect, useReducer } from "react";
import MostPopular from "./boxes/mostpopular";
import MostPopular2 from "./boxes/mostPopular2";
import TopStories from "./boxes/TopStories";

const initial={
    isLoading:true,
    popularData:[],
    commonData:[],
    nationalData:[]
}
const reducer=(state,action)=>{
    console.log(state)

    switch(action.type){
       case "POPULARDATA": return{ ...state,popularData:action.payload};
       case "COMMONDATA": return {...state,commonData:action.payload};
       case "NATIONALDATA": return {...state,nationalData:action.payload};
       default: return state;
    }
}

const POPULAR=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&pageSize=10&page=1&apiKey=737de212e6c549f8a39ce376180cc4e1`).then((res)=>{
        console.log(res.data.articles)
        dispatch({type:"POPULARDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const COMMON=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=congress&pageSize=16&page=1&apiKey=737de212e6c549f8a39ce376180cc4e1`).then((res)=>{
        console.log(res.data.articles)
        dispatch({type:"COMMONDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const NATIONAL=(dispatch)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?q=modi&pageSize=3&page=1&apiKey=737de212e6c549f8a39ce376180cc4e1`).then((res)=>{
        console.log(res.data.articles)
        dispatch({type:"NATIONALDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
export default function Nation (){
const [state,dispatch]=useReducer(reducer,initial)

    useEffect(()=>{
POPULAR(dispatch)
COMMON(dispatch)
NATIONAL(dispatch)
    },[])
    console.log(state)

    return (
       <div style={{display:"flex",justifyContent:"space-between",width:"80%",height:"1500px",margin:"auto"}}>
         <div style={{width:"67%",height:"100%",display:"flex",justifyContent:"space-between",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
            <div style={{width:"60%",height:"100%"}}>
            <h2 style={{textAlign:"start",marginLeft:"5%",marginTop:"-1%"}}>TOP STORIES</h2>
            <div style={{width:"190px",height:"3px",marginLeft:"5%",backgroundColor:"red",marginTop:"-4%"}}></div>
            
            <div style={{marginTop:"5px"}}>
            {
                state.nationalData?.map((el)=>(
                    <TopStories key={el.description } title={el.title } description={el.description} image={el.urlToImage }/>
                ))
              }

                </div>
             
            </div>
            <div style={{width:"39%",height:"100%"}}>
            <div style={{marginLeft:"10px"}}>
               {
                state.commonData?.map((el)=>(
                    <MostPopular2 key={el.description } title={el.title } image={el.urlToImage }/>
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
                    <MostPopular key={el.description } title={el.title } image={el.urlToImage } />
                ))
             }
             </div>
         </div>
       
       </div>
    )
}