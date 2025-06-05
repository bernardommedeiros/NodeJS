import { randomUUID } from "node:crypto"

export class DataBase {
    #products = new Map();

    list() {
        return Array.from(this.#products.values   ()); 
    }

    create(product) {
        const productId = randomUUID()
        this.#products.set(productId, product)
    }

    update(id, product) {
        this.#products.set(id, product)
    }

    delete(id) {
        this.#products.delete(id)
    }

}