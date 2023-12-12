 const {test,expect}=require ('@playwright/test')

 test( 'Multiple Locators', async({page})=>{

    await page.goto('https://demoblaze.com/')
    // Find all the links on the page

   /* const pagelinks =await page.$$('a')

    for(const pagelink of pagelinks)
    {
        const linktext = await pagelink.textContent()
        console.log(linktext)
    } */

    // Find all text for products

     page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
     const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

     for (const product of products)
     {
         const productname = await product.textContent()
         console.log(productname)
     }

 }
 )