import LoginPage from "../pages/loginPage";
import { logs } from '../support/logger';

const login = new LoginPage();

const visitUrl = "https://www.saucedemo.com/?utm_source=chatgpt.com";
class logindetails {
  loginCred() {
    cy.visit(visitUrl);
    login.enterUsername("standard_user");
    login.enterPassword("secret_sauce");
    login.clickLogin();
    cy.task("log","Login Successful!!");
    logs.push({
      testcase: 'Login',
      status: 'PASS',
      remarks: 'Login Successful'
    });
  }
}

export default logindetails;
