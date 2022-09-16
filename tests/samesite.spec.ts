import {test, expect} from '@playwright/test';

test.only('A SameSite=None cookie is set to Lax', async ({page}) => {
    await expect(page.context().cookies()).resolves.toStrictEqual([]);
    const response = await page.request.fetch('https://localhost:7443/', {
        method: 'get',
        ignoreHTTPSErrors: true
    });
    const setCookieHeader = response.headersArray()
        .filter(({name}) => name.toUpperCase() === 'Set-Cookie'.toUpperCase())
        .map(({value}) => value);
    expect(setCookieHeader[0]).toContain('SameSite=None');
    const [cookie] = await page.context().cookies();
    expect(cookie.sameSite).toBe('None');
})
