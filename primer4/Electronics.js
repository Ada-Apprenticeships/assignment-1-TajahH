import Product from "./Product";

export class Electronics extends Product {

    constructor(id, name, price, quantity, brand, warranty){
        super(id, name, price, quantity);
        this.brand = brand;
        this.warranty = warranty;

    }

    getProductDetails(){
        const electronicDetails = super.getProductDetails();
        return {
            ...electronicDetails,
            brand: this.brand,
            warranty: this.warranty

        }
    }

   getBrand(){
        return this.brand;
    }

    getWarranty(){
        return this.warranty;
    }
}