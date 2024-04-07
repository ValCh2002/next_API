'use client'
import { addBookData } from "@/lib/features/books/bookSlice";
import { useAppDispatch } from "@/lib/hooks";
import { IBook } from "@/type/type";
import { useRouter } from 'next/navigation';
import React from "react";
import { useForm } from "react-hook-form";
import 'app/styles/show.scss'

export const AddBook = React.memo(() => {
    const router = useRouter()

    const dispatch = useAppDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IBook>()
    const addBook = (data: IBook) => {
        dispatch(addBookData({ ...data, id: Date.now() })).then(res => {

            reset()
            router.replace('/')
        }).catch(console.warn)
    }
    return <div>
        <h3>Add Book</h3>
        <form onSubmit={handleSubmit(addBook)}>
            <input placeholder="Book Title" {...register('title', { required: 'Enter Book Title!!' })} />
            {errors.title && <p>{errors.title.message}</p>}
            <input placeholder="Book Author" {...register('author', { required: 'Enter Book Author!!' })} />
            {errors.author && <p>{errors.author.message}</p>}
            <input placeholder="Price" {...register('price', { required: 'Enter Book Price!!' })} />
            {errors.price && <p>{errors.price.message}</p>}
            <input placeholder="Book Count" {...register('count', { required: 'Enter Book Count!!' })} />
            {errors.count && <p>{errors.count.message}</p>}
            <input placeholder="About  Book" {...register('desc', { required: 'Enter Book Description!!' })} />
            {errors.desc && <p>{errors.desc.message}</p>}
            <input placeholder="Image URL" {...register('picUrl', { required: 'Enter Book Picture URL!!' })} />
            {errors.picUrl && <p>{errors.picUrl.message}</p>}
            <button>Add Book</button>
        </form>
    </div>
})