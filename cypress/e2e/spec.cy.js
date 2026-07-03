import LoginDetails from "../pages/loginDetails";
import DashboardCheck from "../pages/dashboardCheck";
import CartItem from "../pages/cartItem";
import { logs } from '../support/logger';

const logindetails = new LoginDetails();
const dashboard = new DashboardCheck();
const cartItem = new CartItem();

describe("Login", () => {

  // it("Valid Login", () => {
  //   logindetails.loginCred();
  //   cy.task("log", "Login Successful terminal");
  //   cy.wait(1000);
  // });
  // it("Login Successful - Navigated to Home Page", () => {
  //   logindetails.loginCred();
  //   dashboard.dashboardCheck();
  //   cy.wait(2000);
  //   cy.task("log", "Dashboard Successful terminal");
  // });
  it("Adding cart item", () => {
    logindetails.loginCred();
    dashboard.dashboardCheck();
    cartItem.AddItems();
    cartItem.removeItems();
    cartItem.continueShopping();
    cartItem.checkout();
  });
   after(() => {
    cy.writeFile('cypress/reports/logs.json', logs);
  });

});
