type FetcherParams = {
    query: string
}

type FetcherResults<T> = { data: T }

const fetchAPI = async <T>({
    query }: FetcherParams
): Promise<FetcherResults<T>> => {
    const url = "http://localhost:4000/graphql";

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ query })
    })

    const { data, err } = await res.json();
    if (err) {
        throw new Error(err.message)
    }
    return { data }
}

export default fetchAPI