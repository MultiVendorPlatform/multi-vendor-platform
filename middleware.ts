import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { isSignedIn, sessionClaims } = await auth(); // Use await to get auth data

  // Handle API user requests
  if (req.nextUrl.pathname.startsWith("/api/user")) {
    if (!isSignedIn) {
      return NextResponse.json(
        { message: "You are not authorized to access this resource" },
        { status: 401 }
      );
    }
  }

  // Handle API admin requests
  if (req.nextUrl.pathname.startsWith("/api/admin")) {
    if (sessionClaims?.metadata?.role !== "admin") {
      return NextResponse.json(
        { message: "You are not authorized to access this resource" },
        { status: 401 }
      );
    }
  }

  // Allow request to proceed if everything is valid
  const response = NextResponse.next();
  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
