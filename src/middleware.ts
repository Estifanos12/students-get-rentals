import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
});

export const config = {
  matcher: [
    "/quiz/:path*",
    "/profile",
    "/profile/:path*",
    "/room_mates/:path*",
  ],
};
