const puppeteer = require('puppeteer');
const fs = require('fs');


(async () => {
    const browser = await puppeteer.launch({
        headless: false, //launch in non-headless mode so you can see graphics
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });


    let [page] = await browser.pages();
    await page.setRequestInterception(true);

    const getCookies = async (page) => {
        // Get page cookies
        const cookies = await page.cookies()

        // Save cookies to file
        fs.writeFile('./cookies.json', JSON.stringify(cookies, null, 4), (err) => {
            if (err) console.log(err);
            return
        });
    }


    const setCookies = async (page) => {
        // Get cookies from file as a string
        let cookiesString = fs.readFileSync('./cookies.json', 'utf8');

        // Parse string
        let cookies = JSON.parse(cookiesString)

        // Set page cookies
        await page.setCookie.apply(page, cookies);
        return
    }




    page.on('request', async (req) => {

        // If URL is already loaded in to system
        if (req.url() === 'https://progress.appacademy.io/me/sign_in') {
            console.log('logged in, get the cookies');
            await getCookies(page);
            // if it's being in login page, try to set existed cookie
        } else if (req.url() === 'https://progress.appacademy.io/me/sign_in/') {
            await setCookies(page);
            console.log('set the saved cookies');
        }


        // otherwise go to login page and login yourself
        req.continue();
    });


    await page.goto('https://progress.appacademy.io/me');






})();



