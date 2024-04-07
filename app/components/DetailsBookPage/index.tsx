'use client'
import { getBookByIdData, selectBook } from "@/lib/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import 'app/styles/show.scss'

export const DetailsBook=React.memo(({id}:{id:number})=>{
    const book=useAppSelector(selectBook)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getBookByIdData(id))
    },[])
    return <div>
        <h3>Details Book </h3>
        <div className="bookDetails">
            <h4>{book.title}</h4>
            <img src={book.picUrl} alt="...." />
            <p>{book.author}</p>
            <p>{book.price}AMD</p>
            <p>Remained - {book.count}</p>
            <p>About Book - {book.desc}</p>
        </div>
    </div>
})