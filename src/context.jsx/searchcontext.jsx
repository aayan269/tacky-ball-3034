import { createContext, useState } from "react";



export const SearchContext=createContext()


export default function SearchContextProvider({children}){
    const [text,setText]=useState("")
    const [content,setContent]=useState("")
    const [image,setImage]=useState("")
    const [ttl,setTtl]=useState("")

    return <SearchContext.Provider value={{text,setText,content,setContent,image,setImage,ttl,setTtl}}>{children}</SearchContext.Provider>
}