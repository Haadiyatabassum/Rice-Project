import axios from "axios";

//creating a reusable instance for all api calls endpoints
export const apiClient=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

//generating a token
//used for checking who u are (admin vendor user)  and what access(authorization) we have 

apiClient.interceptors.request.use(   
     (config)=>{
        let token=localStorage.getItem("token")
        if(token)
        {
            config.headers.Authorization=`Bearer ${token}`
        }
        return config;
    },
    (error)=>Promise.reject(error)
)

//handling the response
apiClient.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if(error.response?.status===401){
            //unauthorized user
            localStorage.removeItem("token")
            localStorage.removeItem("user")   //optional
            window.location.href="/login"
        }
        return Promise.reject(error)
    }
)

//generating dummy token stimulation(it will be generated in backend)
export const mockAuth={
    generateToken:(user)=>{
        return `mock_auth ${user.id}_${Date.now()}`
    }
}