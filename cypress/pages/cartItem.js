import { logs } from '../support/logger';

class cartItems {
  AddItems() {
    cy.url().should("include", "inventory.html");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.wait(1000);
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.wait(1000);
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.wait(1000);
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    cy.wait(1000);
    cy.get("a.shopping_cart_link").click();
    cy.wait(1000);
    cy.url().should("include", "cart.html");
    cy.contains("Your Cart");

    cy.task("log","Items Added Successfully!!");
    logs.push({
      testcase: 'Add Item',
      status: 'PASS',
      remarks: 'Items Added Successfuly!!'
    });
  }

  removeItems() {
    cy.get("#remove-sauce-labs-backpack").click();
    cy.wait(1000);
    cy.get("#remove-sauce-labs-bolt-t-shirt").click();
    cy.wait(1000);
    cy.task("log","Items Removed Successful!!");
    logs.push({
      testcase: 'Remove Item',
      status: 'PASS',
      remarks: 'Items Removed Successfuly!!'
    });
  }

  continueShopping() {
    cy.get("#continue-shopping").click();
    cy.url().should("include", "inventory.html");
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    cy.wait(1000);
    cy.get("#remove-sauce-labs-fleece-jacket").click();
    cy.wait(1000);
    cy.get("a.shopping_cart_link").click();
    cy.wait(1000);
    cy.contains("Your Cart");
    cy.task("log","Continue Shopping works!!");
    cy.wait(1000);
    logs.push({
      testcase: 'Continue Shopping Flow',
      status: 'PASS',
      remarks: 'Continue Shopping works!!'
    });
  }

  checkout() {
    cy.get("#checkout").click();
    cy.url().should("include", "checkout-step-one.html");
    cy.contains("Checkout: Your Information");
    cy.task("log",'Checkout Button works!!')
    cy.wait(1000);
    logs.push({
      testcase: 'Checkout Flow',
      status: 'PASS',
      remarks: 'Checkout Button works!!'
    });
  }
}
export default cartItems;
