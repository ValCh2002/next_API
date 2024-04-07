import { createAppSlice } from "@/lib/createAppSlice";
import { IBook } from "@/type/type";
import { addBookAPI, getBookByIdAPI, getBooksAPI } from "./bookAPI";

const initialState:{books:IBook[],book:IBook}={
    books:[],
    book:{}as IBook
}

export const bookSlice=createAppSlice({
    name:"book",
    initialState,
    reducers:(create)=>({
        getBooksData:create.asyncThunk(
            async()=>{
                return await getBooksAPI()
            },
            {fulfilled:(state,action)=>{
                state.books=action.payload
            }}
        ),getBookByIdData:create.asyncThunk(
            async(id)=>{
                return await getBookByIdAPI(id)
            },
            {fulfilled:(state,action)=>{
                state.book=action.payload
            }}
        ),
        addBookData:create.asyncThunk(
            async(obj)=>{
                return await addBookAPI(obj)
            }
        )
    }),
    selectors:{
        selectBooks:(app)=>app.books,
        selectBook:(app)=>app.book,
    }
})

export const {getBooksData,getBookByIdData,addBookData}=bookSlice.actions
export const {selectBooks,selectBook}=bookSlice.selectors