import { test, expect } from "@playwright/test";
import { Login } from "./POM/Login";
import { AddVehicle } from "./POM/AddVehicle";

//falta agregar el random para que elija vehiculos al azar a eliminar
//faltaria agregar vehiculos random

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
  const currentUrl = page.url();
  expect(currentUrl).toContain("auth");
});

test("Login suscefull and Add new vehicle", async ({ page }) => {
  //import custom Class
  const dataLogin = new Login(page);
  await dataLogin.loginSuscefull();
  await page.locator("#onetrust-accept-btn-handler").click();
  const dataVehicle = new AddVehicle(page);
  //assertion login suscefull
  const urlSuscefullLogin = page.url();
  expect(urlSuscefullLogin).toContain("parking_pass");
  //add new vehicle
  await dataVehicle.addVehicleFunction();
  //ass vehicle added
  const vehicles = page.locator("#vehicles");
  expect(vehicles).toBeVisible;
});
test("Remove Vehicle", async ({ page }) => {
  const dataLogin = new Login(page);

  await dataLogin.loginSuscefull();
  await page.goto("/vehicles");
  await page.locator("#onetrust-accept-btn-handler").click();

  //remove vehicle with position 0
  const vehiclesEdit = page.locator(".btn.btn-small.btn-info.vehiclebtnbig");
  await vehiclesEdit.nth(0).click();
  await page.locator("a.close").click();
  await page.locator(".btn.btn-success").last().click();
});

test("Login failled", async ({ page }) => {
  //import custom Class
  const dataLogin = new Login(page);
  await dataLogin.loginFail();
  //assertion
  const message = page.locator(".alert alert-error");
  expect(message).toBeVisible;
});
