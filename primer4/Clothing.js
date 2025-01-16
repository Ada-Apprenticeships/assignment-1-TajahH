import Product from "./Product";

export class Clothing extends Product {

    constructor(id, name, price, quantity){
        super(id, name, price, quantity);
        this.size = this.size;
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

    size(){
        return this.size;

    }

    material(){
        return this.material
    }
}