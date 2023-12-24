const {test, expect}=require("@playwright/test")


 test("Web Table Operations", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//body[1]/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/table[1]/tbody[1]/tr[3]/td[4]").check()
    await page.waitForTimeout(3000)

 })