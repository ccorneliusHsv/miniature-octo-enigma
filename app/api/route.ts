import {NextResponse} from "next/server";
import {request} from "@/lib/datocms";
import {cache} from "react";

const HOMEPAGE_QUERY =
    `query {allOffers {id}}`;

type allOfferReturnType = { allOffers: [{ id: number }] };


const getOffers = cache(async () => {
    const data = await request({
        query: HOMEPAGE_QUERY,
        variables: {limit: 10}
    }) as allOfferReturnType;
    return data;
})

export async function GET(request: Request) {
    const data = await getOffers();

    //return NextResponse.status(200).setHeader("cache-Control", "s-maxage=60").json(data);
    return NextResponse.json(data);
}
