import {BASE_URL} from "./constant.js"
import axios from "axios"


export async function getAllData(){
    const response = await axios (`${BASE_URL}/product`)
    return response
}


export async function getDataById(id){
    const response = await axios (`${BASE_URL}/product/${id}`)
    return response
}