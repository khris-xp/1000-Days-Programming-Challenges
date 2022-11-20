const fetchAPI = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    const res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })

    const data = await res.json();
    return { data }
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchAPI()
    return products.data
}

export default getAllProducts