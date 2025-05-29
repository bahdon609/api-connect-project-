import axios from "axios";


const axiosBaseUrl=axios.create({
    baseURL:"https://creativeexam.com"
})

const  useBaseUrl=()=>{
    return axiosBaseUrl
}

export default useBaseUrl