import { NextRequest } from 'next/server';

function CheckCookie(request: NextRequest) {
  const token = request.cookies.get('token')?.value || null;
  const isCookieSet: boolean = !!token;

  return isCookieSet;
}

export default CheckCookie;
