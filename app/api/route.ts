import {NextResponse} from "next/server";
import {request} from "@/lib/datocms";

const HOMEPAGE_QUERY =
    `query {allOffers {id}}`;

type allOfferReturnType = { allOffers: [{ id: number }] };

export async function GET() {

    const data = await request({
        query: HOMEPAGE_QUERY,
        variables: {limit: 10}
    }) as allOfferReturnType;

    return NextResponse.json(data);
}