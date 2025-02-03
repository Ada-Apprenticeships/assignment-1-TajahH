import Product from "./Product";

export class Clothing extends Product {

    constructor(id, name, price, quantity, size, material){
        super(id, name, price, quantity);
        this.size = size;
        this.material = material
        
    }


    getProductDetails(){
        const clothesDetails = super.getProductDetails();
        return {
            ...clothesDetails,
            size: this.size,
            material: this.material

        }
    }

    getSize(){
        return this.size;

    }

    getMaterial(){
        return this.material
    }
}