// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// 1. Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/account(.*)',
  '/settings(.*)',
  '/api(.*)', // Protect all API routes by default
]);

export default clerkMiddleware(async (auth, req) => {
  // 2. Public routes
  const publicPaths = [
    '/',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/about',
    '/contact',
  ];

  // 3. Skip auth for public routes
  if (publicPaths.some(path => req.nextUrl.pathname.match(path))) {
    return;
  }

  // 4. Protect matched routes
  if (isProtectedRoute(req)) {
    await auth().protect(); // Add await here
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};