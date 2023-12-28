const {test, expect}=require("@playwright/test")


 test("Keyboard actions", async ({page})=>{
    await page.goto("https://www.diffchecker.com/")

    page.locator("//div[@aria-label='Original text input']").fill("Welcome")
    await page.waitForTimeout(5000)

    page.keyboard.press("Control+A")
    await page.waitForTimeout(3000)
    page.keyboard.press("Control+C")
    await page.waitForTimeout(3000)

    page.keyboard.down("Tab")
    await page.waitForTimeout(3000)
    page.keyboard.down("Tab")
    await page.waitForTimeout(3000)

    page.keyboard.press("Control+v")

    await page.waitForTimeout(5000)





 })