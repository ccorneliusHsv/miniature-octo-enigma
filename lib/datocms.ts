import {GraphQLClient, Variables} from "graphql-request";

type paramType = {
    query: string
    variables: Variables
    includeDrafts?: string
    excludeInvalid?: string
}

type headerType = {
    authorization: string
    'X-Include-Drafts'?: string
    'X-Exclude-Invalid'?: string
}
export function request({ query, variables, includeDrafts, excludeInvalid } : paramType) {

    const headers: headerType = {
        authorization: `Bearer ${process.env.DATOCMS_READ_ONLY_API_TOKEN}`,
    };
    if (includeDrafts) {
        headers['X-Include-Drafts'] = 'true';
    }
    if (excludeInvalid) {
        headers['X-Exclude-Invalid'] = 'true';
    }
    const client = new GraphQLClient('https://graphql.datocms.com', { headers });
    return client.request(query, variables);
}