const{test,expect}=require('@playwright/test')

test ('Builtin-Locators',async({page})=>{
    await page.goto ('https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox-mixed/')
    const checkBoxes =[
                "Lettuce"
               // "//input[@id='cond1']",
               // "//input[@id='cond3']"
        
    ]
    //await page.getByLabel('Lettuce').check()
    //await page.waitForTimeout(3000)

    //Selecting the checkbox
  for (const checkBox of checkBoxes)
    {
        await page.getByLabel(checkBox).check()
    }
    await page.waitForTimeout(3000)

    //Unselecting the checkbox
    for (const checkBox of checkBoxes)
    {
        if(await page.getByLabel(checkBox).isChecked())
        {
                await page.getByLabel(checkBox).uncheck()
        }
    }

    await page.waitForTimeout(3000) 
})