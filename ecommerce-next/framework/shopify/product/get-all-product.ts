import getAllProductQuery from "../utils/queries/get-all-products";
import fetchAPI from "../utils/fetch-api";

type FetchParams = {
    query: string
}

const getAllProducts = async (): Promise<any[]> => {
    const products = await fetchAPI({ query: getAllProductQuery })
    return products.data
}

export default getAllProducts