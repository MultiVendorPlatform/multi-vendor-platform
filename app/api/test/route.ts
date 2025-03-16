import { dbConnect } from "@/lib/dbConnects";

export async function GET() {
    await dbConnect();
    return Response.json({message: "message"}, {status: 200});
}