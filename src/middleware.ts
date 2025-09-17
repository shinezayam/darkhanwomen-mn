import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'mn'];
const defaultLocale = 'mn';

// Get the preferred locale, similar to the above or from a cookie
function getLocale(request: NextRequest): string {
  // Check if there's a locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If there's no locale in the pathname, redirect to default locale
  if (pathnameIsMissingLocale) {
    return defaultLocale;
  }

  // Extract locale from pathname
  const locale = pathname.split('/')[1];
  return locales.includes(locale) ? locale : defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), api routes, static files, and images
    '/((?!_next|api|favicon.ico|images|.*\\.).*)',
  ],
};
