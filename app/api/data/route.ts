import { Data, Form } from '@/types'
import { NextResponse } from 'next/server'
import { limiter } from '../config/limiter'

const url: string = process.env.NEXT_PUBLIC_API_URL ?? ''

export async function GET(): Promise<NextResponse> {
    const remaining: number = await limiter.removeTokens(1)
    const res: Response = await fetch(url)
    const data: Data[] = await res.json()
    if(remaining < 0){
        return new NextResponse(null, {status: 429, statusText: 'Too many requests', headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/plain'}})
    } 
    return NextResponse.json(data, {headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }})
}

export async function POST(request: Request): Promise<NextResponse> {
    const { title, email, msg }: Form = await request.json()

    if(!title || !email || !msg) return NextResponse.json({ 'message': 'Missing information'})

    const res: Response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title, email, msg
        })
    })

    const newPost: Form = await res.json()

    return NextResponse.json(newPost)
}