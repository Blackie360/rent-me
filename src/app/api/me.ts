import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
return NextResponse.json({
    mesage: "Hello"
})
    } catch (error) {
if (error instanceof Error) {
    return new NextResponse(null, {
        status: 500,
        statusText: `internal server error: ${error.message}`
    })
}
    }
}