import { Page, Locator } from "@playwright/test";

export class AddVehicle {
  page: Page;
  driver: Page;
  vehicleAddPage: Locator;
  addVehicle: Locator;
  inputVehicleName: Locator;
  inputPlateName: Locator;
  submitButton: Locator;
  selectCountry: () => void;

  //gets
  constructor(driver: Page) {
    this.page = driver;
    this.vehicleAddPage = this.page.locator("a.veiculos");
    this.addVehicle = this.page.locator("#aNewVehicle");
    this.inputVehicleName = this.page.locator("input[name=comment]");
    this.inputPlateName = this.page.locator("input[name=plate]");
    this.selectCountry = () => {
      this.page.selectOption("select[name=type]", {
        value: "0",
      });
    };

    this.submitButton = this.page.locator("a[type=submit]");
  }

  //methods

  async addVehicleFunction() {
    await this.vehicleAddPage.click();
    await this.addVehicle.click();
    await this.inputVehicleName.fill("Audi");
    await this.inputPlateName.fill("5161SFS");
    await this.selectCountry();
    await this.submitButton.click();
  }
}
