/**
 * @typedef Product
 * @type {object}
 * @property {number} id
 * @property {string} name
 */

class ProductStore {
    constructor() {
        /** @type {number} */
        this._index = 0;
        /** @type {Product[]} */
        this._products = [];
    }

    getAll() {
        return this._products;
    }

    /**
     * 
     * @param {string} name
     */
    add(name) {
        this._products.push({ id: this._index++, name });
        return true;
    }

    /**
     * 
     * @param {number} id 
     */
    remove(id) {
        const index = this._products.findIndex(product => product.id === id);
        if (~index) {
            this._products.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = new ProductStore();