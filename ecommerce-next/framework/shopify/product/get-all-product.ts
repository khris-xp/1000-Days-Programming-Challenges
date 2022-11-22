import getAllProductQuery from "../utils/queries/get-all-products";

type FetchParams = {
    query: string
}

const fetchAPI = async ({ query }: FetchParams) => {
    const url = "http://localhost:4000/graphql";

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ query })
    })

    const data = await res.json();
    return { data }
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchAPI({ query: getAllProductQuery })
    return products.data
}

export default getAllProducts