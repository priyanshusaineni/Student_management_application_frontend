import axios from 'axios';
// const BASE_URL=`${process.env.BUILD_URL_ENV}`
const BASE_URL= "http://13.233.66.47:3000/student"

// const BASE_URL = import.meta.env.VITE_BASE_URL;
export const getAllStudents=()=>axios.get(BASE_URL)

export const getStudent=(id)=>{return axios.get(BASE_URL+'-get/'+id)}

export const deleteStudent=(id)=> {return axios.delete(BASE_URL+'/'+id)}

export const updateStudent=(id,student)=> {
    return axios.put(BASE_URL+'/'+id,student)} 

export const postStudent=(student)=>{return axios.post(BASE_URL,student)}

//updated 
