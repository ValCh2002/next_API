import { IBook } from "@/type/type"
import axios from "axios"

export const getBooksAPI=async()=>{
    const {data}=await axios.get('http://localhost:3000/api/books')
    return data
}

export const getBookByIdAPI=async(id:number)=>{
    const {data}=await axios.get('http://localhost:3000/api/books/'+id)
    return data
}

export const addBookAPI=async(obj:IBook)=>{
    const {data}=await axios.post('http://localhost:3000/api/book/add',obj)
    return data
}