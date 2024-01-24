import type { NextRequest } from "next/server";

export function GET(reqest: NextRequest){
    reqest.nextUrl.searchParams
}

export function POST(reqest: NextRequest){

}