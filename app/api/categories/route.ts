import { currentUser } from "@clerk/nextjs/server";

export async function GET(request: Request) {
    const user = await currentUser();
}