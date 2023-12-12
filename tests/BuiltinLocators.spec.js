const{test,expect}=require('@playwright/test')

test ('Builtin-Locators',async({page})=>{
    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Verifying presense of Logo
    const imageText = await page.getByAltText('company-branding')
    await expect(imageText).toBeVisible()

    //Entering the username
    await page.getByPlaceholder('Username').fill('Admin')

    //Entering the password
    await page.getByPlaceholder('password').fill('admin123')

    //Click on Login button
    await page.getByRole('button',{type:"submit"}).click()

    // Locate by text
    const text=await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(text)).toBeVisible()
   

}

)