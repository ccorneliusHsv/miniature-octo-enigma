import {request} from "@/lib/datocms";

const HOMEPAGE_QUERY =
    `query {allOffers {id}}`;

type allOfferReturnType = { allOffers: [{ id: number }] };

export default async function Home() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: {limit: 10}
  }) as allOfferReturnType;

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
