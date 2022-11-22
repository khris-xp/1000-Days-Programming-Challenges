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

    const { data, err } = await res.json();
    if (err) {
        throw new Error(err.message)
    }
    return { data }
}

export default fetchAPI