import axios from "axios";


const axiosBaseUrl=axios.create({
    baseURL:"https://bdschool.my"
})

const  useBaseUrl=()=>{
    return axiosBaseUrl
}

export default useBaseUrl