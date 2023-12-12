import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
    try {
        const token = req.cookies.get('authorization');

        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url))
        }

        if (req.nextUrl.pathname === '/') {
            return NextResponse.redirect(new URL('/home', req.url))
        }

        return NextResponse.next();
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}

export const config = {
    matcher: ['/', '/home'],
}