import getAllProductQuery from "../utils/queries/get-all-products";
import fetchAPI from "../utils/fetch-api";

import { ProductConnection } from "../schema";

type FetchParams = {
    query: string
}

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
    const { data } = await fetchAPI<{ products: ProductConnection }>({ query: getAllProductQuery })
    return data.products
}

export default getAllProducts