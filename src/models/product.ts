export interface Product {
    name: string
    price: string
    id: string
    description?: string
    listImagen: string[]
}
export type ProductList = Array<Product>
