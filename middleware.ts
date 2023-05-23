import { NextResponse } from "next/server"

const allowedOrigins = process.env.NODE_ENV === 'production' ? [process.env.NEXT_HOST] : ['http://localhost:3000']

export function middleware(request: Request): NextResponse {
    const origin = request.headers.get('origin')
    if(origin && !allowedOrigins.includes(origin) || !origin) return new NextResponse(null, {status: 400, statusText: 'Bad Request', headers: {'Content-Type': 'text/plain'}})
    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*'
}