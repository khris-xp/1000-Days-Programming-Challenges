import { fetchAPI, normalizeProduct, getAllProductQuery } from "../utils";
import { ProductConnection } from "../schema";

import { Product } from "@common/types/product"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<Product[]> => {
    const { data } = await fetchAPI<ReturnType>({ query: getAllProductQuery })

    const products = data.products.edges.map(({ node: product }) =>
        normalizeProduct(product)
    ) ?? []
    return products
}

export default getAllProducts