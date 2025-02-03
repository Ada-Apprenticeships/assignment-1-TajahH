// Import the necessary modules
import Product from './Product.js';
import Inventory from './Inventory.js';
import { Electronics } from './Electronics.js';
import { Clothing } from './Clothing.js';

describe('Inventory', () => {
  let inventory;
  let product1, product2, product3;

  beforeEach(() => {
    inventory = new Inventory();
    product1 = new Clothing("A123", "T-shirt", 19.99, 100, "Medium", "100% Linen");
    product2 = new Clothing("B456", "Jeans", 49.99, 50, "XL", "100% Denim" );
    product3 = new Electronics("C123", "Laptop", 999.99, 3, "Apple Mac", "2 years free warranty");
  });

  describe('Adding Products', () => {
    test('can add products to the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      inventory.addProduct(product3);
      expect(inventory.getNumOfItems()).toBe(3);
    });

    test('throws error when adding a product with a duplicate ID', () => {
      inventory.addProduct(product1);
      expect(() => inventory.addProduct(product1)).toThrowError(`Product with ID ${product1.id} already exists.`);
    });
  });

  describe('New products cannot be instantiated while product is an abstract class', () => {
    test('an error is thrown when a new product is declared without Clothing or Electronics', () => {
      let product4;
      expect(() => {
        product4 = new Product("T234", "Desk", 25.45, 10);
    }).toThrowError("Cannot instantiate an abstract class");
  });
})

  describe('Updating Product Quantities', () => {
    test('can update the quantity of a product', () => {
      inventory.addProduct(product1);
      inventory.updateQuantity("A123", 75);
      expect(inventory.getProduct("A123").quantity).toBe(75);
    });

    test('throws error when updating the quantity of a non-existent product', () => {
      expect(() => inventory.updateQuantity("C789", 75)).toThrowError(`Product with ID C789 not found.`);
    });
  });

  describe('Removing Products', () => {
    test('can remove a product from the inventory', () => {
      inventory.addProduct(product1);
      inventory.addProduct(product2);
      inventory.removeProduct("A123");
      expect(() => inventory.getProduct("A123")).toThrowError(`Product with ID A123 not found.`);
      expect(inventory.getProduct("B456")).toEqual(product2.getProductDetails());
    });

    test('throws error when removing a non-existent product', () => {
      expect(() => inventory.removeProduct("C789")).toThrowError(`Product with ID C789 not found.`);
    });
  });

  describe('Retrieving Product Details', () => {
    test('can retrieve the details of products', () => {
        inventory.addProduct(product1);
        inventory.addProduct(product2);
        inventory.addProduct(product3)
        
        expect(inventory.getProduct("A123")).toEqual({
            id: "A123",
            name: "T-shirt",
            price: 19.99,
            quantity: 100,
            size: "Medium",
            material: "100% Linen"
        });

        expect(inventory.getProduct("B456")).toEqual({
            id: "B456",
            name: "Jeans",
            price: 49.99,
            quantity: 50,
            size: "XL",
            material: "100% Denim"
        });

        expect(inventory.getProduct("C123")).toEqual({
          id: "C123",
          name: "Laptop",
          price: 999.99,
          quantity: 3,
          brand: "Apple Mac",
          warranty: "2 years free warranty"
      });

    });
  });
});
