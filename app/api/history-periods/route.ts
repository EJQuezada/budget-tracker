import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
    const user = await currentUser();
    if (!user) {
        redirect("/sign-in");
    }

    const periods = getHistoryPeriods(user.id)
    return Response.json(periods);
}

export type GetHistoryPeriodsResponseType = Awaited<ReturnType<typeof 

async function getHistoryPeriods(userId: string) {

}