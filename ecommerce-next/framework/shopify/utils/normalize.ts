import { ImageEdge, Product as ShopifyProduct } from "../schema";

import { Product } from "@common/types/product";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
    edges.map(({ node: { originalSrc: url, ...rest } }) => ({
        url: `/images/{url}`,
        ...rest
    }
    ))

export function normalizeProduct(productNode: ShopifyProduct): Product {
    const { id, title: name, handle, vendor, description, images: imagesConnection, ...rest } = productNode

    const product = {
        id,
        name,
        vendor,
        description,
        path: `/${handle}`,
        images: normalizeProductImages(imagesConnection),
        slug: handle.replace(/^\/+|\/+$/g, ""),
        ...rest
    }

    return product
}