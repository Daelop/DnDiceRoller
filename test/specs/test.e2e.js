import { expect } from '@wdio/globals'
import dicePage from '../pageobjects/dice.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('Should output a string with a length of 41(results are outputted) and not output the same value each time', async () => {
        await dicePage.open()

        await dicePage.rollButton.click()
        let resultA = await dicePage.DiceResults.getText()
        await expect(resultA).toHaveLength(41)
        await dicePage.rollButton.click()
       await expect(dicePage.DiceResults).not.toHaveText(resultA)
        
        
        
        //await expect(SecurePage.flashAlert).toBeExisting()
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
            //'You logged into a secure area!')
    })
})

