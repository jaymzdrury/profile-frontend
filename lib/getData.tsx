import { Data } from "@/types"

export async function getData(): Promise<Data[]> {
    const res: Response = await fetch(`${process.env.NEXT_HOST}/api/data`, {headers:{'Cache-Control': 'no-cache'}})
    if(!res.ok) throw new Error('Failed to fetch data')
    return res.json()
  }