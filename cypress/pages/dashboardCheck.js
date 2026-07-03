import { logs } from '../support/logger';

class dashboard {
  dashboardCheck() {
    cy.url().should("include", "inventory.html");
    cy.contains("Swag Labs");
    cy.task("log","Home Page Navigation Successful!!");
logs.push({
      testcase: 'Home Page',
      status: 'PASS',
      remarks: 'Home Page Navigation Successful'
    });
  }
}

export default dashboard;
