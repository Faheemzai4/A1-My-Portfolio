import { test, expect } from "@playwright/test";

test.describe("Portfolio Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/"); // make sure your dev server is running
  });

  test("should load the homepage", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:3000/");
  });

  test("header navigation links are visible", async ({ page }) => {
    // Only desktop menu buttons
    const navLinks = page.locator("nav ul.md\\:flex li button");
    await expect(navLinks).toHaveCount(5);
    await expect(navLinks.first()).toBeVisible();
  });

  test("About section is visible", async ({ page }) => {
    const about = page.locator("#about");
    await expect(about).toBeVisible();
  });

  test("Skills section is visible", async ({ page }) => {
    const skills = page.locator("#skills");
    await expect(skills).toBeVisible();
  });

  test("Courses section is visible", async ({ page }) => {
    const courses = page.locator("#courses");
    await expect(courses).toBeVisible();
  });

  test("Contact section is visible", async ({ page }) => {
    const contact = page.locator("#contact");
    await expect(contact).toBeVisible();
  });

  test("clicking nav links scrolls to correct section", async ({ page }) => {
    const sections = ["home", "about", "skills", "courses", "contact"];

    for (const id of sections) {
      const link = page.locator(`nav ul.md\\:flex li button:has-text("${id.charAt(0).toUpperCase() + id.slice(1)}")`);
      await link.click();

      const section = page.locator(`#${id}`);
      await section.scrollIntoViewIfNeeded();
      await expect(section).toBeVisible({ timeout: 10000 });
    }
  });
});
