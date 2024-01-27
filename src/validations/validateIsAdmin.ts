import type { NextRequest } from 'next/server'

export default function validateIsAdmin(request: NextRequest):boolean {
 return true;
}