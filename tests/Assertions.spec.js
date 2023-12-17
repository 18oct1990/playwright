 const{test,expect}=require('@playwright/test')
 

 test ('Soft Assertion',async ({page})=>{

    await page.goto('https://demoblaze.com/')
    await page.click("#login2")
    const un= await page.locator("//input[@id='loginusername']")
    await un.fill("admin")


   //Negative test case for soft assertion
    await expect.soft(un).not.toHaveValue("adminn")
    await expect(un).toBeEnabled()
 }
 
 )