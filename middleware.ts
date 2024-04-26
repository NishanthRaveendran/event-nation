import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhooks/clerk',
        '/api/webhooks/stripe',
        '/api/uploadthing',
        '/assets/images/dotted-pattern.png',
        '/assets/images/hero.png',
        '/favicon.ico',
        '/assets/images/logo.svg'
    ],
    ignoredRoutes: [
        '/api/webhooks/clerk',
        '/api/webhooks/stripe',
        '/api/uploadthing'
    ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};