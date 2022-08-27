import { useState } from "react"
import { ThemContext } from "../context/ThemContext"
import { ChangeCssRouteVariables } from "../model/ChangeCssRouteVariables";
import { Storage } from "../model/Storage";

export const ThemProvider = ({children,...props})=>{
    const [them,setThem]=useState(Storage.getItem('them')||('light'));
   
   ChangeCssRouteVariables(them);
   function changeThem(them){
        Storage.setItem('them',them);
        setThem(them);
        ChangeCssRouteVariables(them);
    }

    return (
        <ThemContext.Provider value={{
            them,
            changeThem
        }}
        {...props}
        >{children}
        </ThemContext.Provider>
    )
}
