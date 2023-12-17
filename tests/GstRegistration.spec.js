const{test,expect}=require ('@playwright/test')

test('Gst Registration',async({page})=>{

    await page.goto('https://www.gst.gov.in/')
    await page.click("//a[normalize-space()='Services']")
   
    await page.click("//a[@class='dropdown-toggle'][normalize-space()='Registration']")
  

    //Find all links on the page
    const pageLinks =await page.$$ ('//a')

    for (const link of pageLinks )
    {
         const pageLink=await link.textContent()
         
    }

    await page.click("//div[@class='col-xs-12']//a[normalize-space()='New Registration']")
    
    //CHECKBOX & RADIOBOX ASSERTIONS
    const radioButton=await page.locator("//label[normalize-space()='New Registration']")
    await expect.soft(radioButton).toBeChecked()
    await expect.soft(radioButton).toBeEnabled()
    
   
    //DROPDOWN
    //const firstDropdown =await page.locator("//select[@id='applnType']")
    //await page.click("//select[@id='applnType']")
   
    await expect.soft(page.locator('//select[@id="applnType"]//option')).toHaveCount(10)


    //const dropDownOptions =await page.$$('//select[@id="applnType"]//option')

    await page.selectOption("#applnType","APLTD")
    //await page.waitForTimeout(4000)

    const dropDownOptions =await page.$$("#applnType option")
    console.log(dropDownOptions.length)

   // Doesn't stores in form of Array, stores in one line
   // const dropDown = await page.locator("#applnType").textContent()
   // console.log(dropDown)

    for (const option of dropDownOptions)
    {
        let value = await option.textContent()
       if(value.includes("APLTD") )
       {
            await page.selectOption("#applnType", value)
            break
       }
    }
     await page.waitForTimeout(4000)
})