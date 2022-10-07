// slicing design test

import { Selector } from 'testcafe';

fixture `Slicing Design Test`

.page `#`;

test('Slicing Design Test', async t => {

// Test code

// 1. Click on the “Login” button

await t.click(Selector(‘#’));

// 2. Enter the username “wallethub” and password “wallethub”

await t.typeText(Selector(‘#’), ‘wallethub’);

});

// I am trying to write a test case for the following scenario:

// 1. Go to '#'

// 2. Click on the “Write a Review” button

// 3. Click on the “Select Stars” button
// WH-FE-NG-TEST_updated - 1.0.0 - 2020-05-20 11:00:00

// 4. Click on the “Select Stars” button
