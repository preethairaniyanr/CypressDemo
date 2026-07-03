class login {
  enterUsername(username) {
    cy.get('input[name="user-name"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get("input.submit-button").click();
  }
 
}
export default login;
