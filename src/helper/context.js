import React,{createContext, useState} from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [images,setImages] = useState([])
    const [describe,setDescribe] = useState('')
    const [applink,setAppLink] = useState('')
    const [appname,setAppname] = useState('')


    return(
        <AuthContext.Provider
            value={{
                images,
                setImages,
                describe,
                setDescribe,
                applink,
                setAppLink,
                appname,
                setAppname
                
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
