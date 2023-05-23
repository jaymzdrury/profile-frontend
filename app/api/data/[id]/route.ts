import { Data } from '@/types'
import { NextResponse } from 'next/server'

const url: string = process.env.NEXT_PUBLIC_API_URL ?? ''

export async function DELETE(request: Request): Promise<NextResponse> {
    const id: string = request.url.slice(request.url.lastIndexOf('/') + 1)
    await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return NextResponse.json({ 'message': `${id} deleted`})
}

export async function PUT(request: Request): Promise<NextResponse> {
    const id: string = request.url.slice(request.url.lastIndexOf('/') + 1)
    const { name }: Partial<Data> = await request.json()

    const res: Response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name
        })
    })

    const updatedData: Partial<Data> = await res.json()

    return NextResponse.json(updatedData)
}

