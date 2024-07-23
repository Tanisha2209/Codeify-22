import { createContext, useState } from "react"

export const Datacontext = createContext();

const DataProvider = ({children}) =>{
     const [Html,setHtml]= useState('');
     const [Css,setCss]= useState('');
     const [Js,setJs]= useState('');


    return(
        <Datacontext.Provider 
        value={{
            Html,
            setHtml,
            Css,
            setCss,
            Js,
            setJs
        }}
        >
            {children}
        </Datacontext.Provider>
    )
}

export default DataProvider;