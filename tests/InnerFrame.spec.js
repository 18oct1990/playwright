const {test,expect}=require('@playwright/test')

test("Inner Frame",  async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/")
    const outerFrame =await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"})
    const childFrame =await outerFrame.childFrames()
    await childFrame[0].locator('//*[@id="i8"]/div[3]/div').check()

    await page.waitForTimeout(4000)



})