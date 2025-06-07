import { randomUUID } from "node:crypto"

export class DataBase {
    // # -> informação privada
    #products = new Map();

    list() {
        return (Array.from(this.#products.entries()).map((productArr)=> {
            const id = productArr[0];
            const data = productArr[1];

            return {
                id,
                ...data,
            }
        })); 
    }

    create(product) {
        const productId = randomUUID();
        
        this.#products.set(productId, product);
    }

    update(id, product) {
        this.#products.set(id, product);
    }

    delete(id) {
        this.#products.delete(id);
    }

}