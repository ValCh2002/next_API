import { IBook } from "@/type/type";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { data } from "../../data";

interface Context {
  params: undefined;
}

export async function POST(request: NextRequest, context: Context) {
  const body: IBook = await request.json();
  console.log(body);
  data.books.push(body)
  return NextResponse.json({message:"add"});
}
