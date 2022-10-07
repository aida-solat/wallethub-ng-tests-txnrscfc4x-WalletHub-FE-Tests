//WH-FE-NG-TEST_updated - 1.0.0 - 2020-05-20 11:00:00 
//
// 5. Click on the “Select Stars” button

// 6. Click on the “Select Stars” button

// 7. Click on the “Select Stars” button


import { Selector } from 'testcafe';

fixture `WH-FE-NG-TEST_updated`
    .page `https://wallethub.com/profile/test_insurance_company/`;

test('WH-FE-NG-TEST_updated', async t => {
    
        await t
            .click(Selector('a').withText('Write a Review'))
            .click(Selector('span').withText('Select Stars'))
            .click(Selector('span').withText('Select Stars'));
    
    }
);



// Language: typescript
// Path: WalletHub FE Tests\WH-FE-NG-TEST_updated\WHFENGTESTUpdated.tsx
// Compare this snippet from WalletHub FE Tests\Slicing Design Test\SlicingDesignTest.tsx:
// // slicing design test
//
// import { Selector } from 'testcafe';
//
// fixture `Slicing Design Test`
//
// .page `https://wallethub.com/profile/test_insurance_company/`;
//
// test('Slicing Design Test', async t => {
//
// // Test code
//
// // 1. Click on the “Login” button

// await t.click(Selector(‘#’));
//
// // 2. Enter the username “wallethub” and password “wallethub”
//
// await t.typeText(Selector(‘#’), ‘wallethub’);
//
// });
//
// // I am trying to write a test case for the following scenario:
//
// // 1. Go to 'https://wallethub.com/profile/test_insurance_company/'
//
// // 2. Click on the “Write a Review” button
//
// // 3. Click on the “Select Stars” button
// // WH-FE-NG-TEST_updated - 1.0.0 - 2020-05-20 11:00:00
//
// // 4. Click on the “Select Stars” button
//
//WH-FE-NG-TEST_updated - 1.0.0 - 2020-05-20 11:00:00
//
// 5. Click on the “Select Stars” button

// 6. Click on the “Select Stars” button

// 7. Click on the “Select Stars” button


//Regards,
//Soli