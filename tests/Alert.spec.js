const {expect,test}=require ('@playwright/test')

test.skip ("Alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Enable dialog window handler
    page.on("dialog",async dialog=>{

        expect.soft(dialog.type()).not.toContain("Alert") //soft assertion with negative scenario
        expect.soft(dialog.type()).toContain("alert")
        expect.soft(dialog.type()).toContain("COnfirm")
        await dialog.accept()
    })

    await page.locator('//button[@onclick="myFunctionAlert()"]').click()

    await page.waitForTimeout(3000)

})


test.skip ("Confirm",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog",async dialog=>{

        expect(dialog.type()).toContain("confirm")
        await dialog.accept()

    })

    await page.locator("//button[normalize-space()='Confirm Box']").click()

})

test ("Prompt",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog", async dialog=>{
        expect(dialog.type()).toContain("prompt")
        await dialog.accept("Amit")

    })

    await page.locator("//button[normalize-space()='Prompt']").click()


})