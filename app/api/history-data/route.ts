import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
    const user = currentUser();
    if (!user) {
        redirect("/sign-in");
    }

    const {searchParams } = new URL(request.url);
    const timeframe = searchParams.get("timeframe");
    const year = searchParams.get("year");
    const month = searchParams.get("month");
}