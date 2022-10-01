import {  Image } from "@chakra-ui/react";

import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import { SearchContext } from "../context.jsx/searchcontext";
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
   
}
const reducer=(state,action)=>{
    //console.log(state)

    switch(action.type){
       case "POPULARDATA": return{ ...state,popularData:action.payload};
       case "COMMONDATA": return {...state,commonData:action.payload};
       case "NATIONALDATA": return {...state,nationalData:action.payload};
       case "COLUMNDATA": return {...state,columnData:action.payload};
       
       default: return state;
    }
}

const POPULAR=({dispatch,text})=>{
    axios.get(`https://newsapi.org/v2/everything?q=${text}&pageSize=10&page=4&apiKey=46c3c3113ad44a7fa3cbecd7a79ebf50`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"POPULARDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const COMMON=({dispatch,text})=>{
    axios.get(`https://newsapi.org/v2/everything?q=${text}&pageSize=15&page=2&apiKey=46c3c3113ad44a7fa3cbecd7a79ebf50`).then((res)=>{
        //console.log(res.data.articles)
        dispatch({type:"COMMONDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const NATIONAL=({dispatch,text})=>{
    axios.get(`https://newsapi.org/v2/everything?q=${text}&pageSize=3&page=1&apiKey=46c3c3113ad44a7fa3cbecd7a79ebf50`).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"NATIONALDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}
const COLUMN=({dispatch,text})=>{
    axios.get(``).then((res)=>{
       // console.log(res.data.articles)
        dispatch({type:"COLUMNDATA" , payload: res.data.articles})
        
    }).catch((err)=>{
        console.log(err)
    })
}

export default function Search (){
const [state,dispatch]=useReducer(reducer,initial)
const {text}=useContext(SearchContext)

    useEffect(()=>{
POPULAR({dispatch,text})
COMMON({dispatch,text})
NATIONAL({dispatch,text})
COLUMN({dispatch,text})

    },[text])
   // console.log(state)
   

    return (
        <>
       <div style={{display:"flex",justifyContent:"space-between",width:"80%",height:"1450px",margin:"auto"}}>
         <div style={{width:"67%",height:"100%",display:"flex",justifyContent:"space-between",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}}>
            <div style={{width:"60%",height:"100%"}}>
            <h2 style={{textAlign:"start",marginLeft:"5%",marginTop:"4%"}}>TOP STORIES</h2>
            <div style={{width:"190px",height:"3px",marginLeft:"5%",backgroundColor:"red",marginTop:"-4%"}}></div>
            
            <div style={{marginTop:"5px"}} >
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

       </>
    )
}
