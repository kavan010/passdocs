export async function GET(req) {
  return new Response(JSON.stringify({
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET
  }));
}