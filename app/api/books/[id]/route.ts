import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { data } from "../../data";

interface Context {
  params: undefined;
}

export async function GET(request: NextRequest, context: Context) {
 const param:any = context.params
 console.log(param);
 if(param.id){
  const book = data.books.find(elm=>elm.id == Number(param.id))
   return NextResponse.json(book?book:{message:"book not found"});

 }else{
  return NextResponse.json({message:"not found"});

 }
 
}