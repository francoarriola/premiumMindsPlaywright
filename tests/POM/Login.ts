import { Locator, Page } from "@playwright/test";

export class Login {
  page: Page;
  inputName: Locator;
  inputPassword: Locator;
  submitButton: Locator;

  //gets
  constructor(driver: Page) {
    this.page = driver;
    this.inputName = this.page.getByLabel("Email");
    this.inputPassword = this.page.locator("#password");
    this.submitButton = this.page.locator("#kc-login");
  }

  //methods

  async loginSuscefull() {
    await this.inputName.fill("francodoblecuenta@gmail.com");
    await this.inputPassword.fill("soyfranco1234");
    await this.submitButton.click();
  }
  async loginFail() {
    await this.inputName.fill("francodoblecuenta@gmail.com");
    await this.inputPassword.fill("contraseñaIncorrecta");
    await this.submitButton.click();
  }
}
