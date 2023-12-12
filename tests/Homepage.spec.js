

const {test, expect}= require ('@playwright/test');

test('Home Page',async ({page}) =>{
    
    await page.goto('https://demoblaze.com/');
    const pageTitle = await page.title();
    console.log (pageTitle);

    await expect(page).toHaveTitle('STORE');

   const pageURL = page.url();
   console.log ('Page URL is', pageURL);

   await expect(page).toHaveURL('https://demoblaze.com/');

   await page.close();

}

)

