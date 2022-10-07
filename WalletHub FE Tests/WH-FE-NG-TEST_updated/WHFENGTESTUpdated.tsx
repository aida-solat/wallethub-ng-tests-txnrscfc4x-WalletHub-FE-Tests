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
