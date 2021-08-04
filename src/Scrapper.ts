import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

export class WebScrapper {
    public async ScrapeTest(): Promise<Object> {
        return (async () => {
            const browser = await puppeteer.launch({headless: true});

            const page = await browser.newPage();
            await page.goto('https://files.shaps.work');

            const pageData = await page.evaluate(() => {
                // Here, everything usually runnable should work
                console.log('Page loaded');
                const divCount = document.querySelectorAll('div').length;

                console.log('Div count ' + divCount);

                return {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight,
                    divCount
                };
            });

            await page.close();
            await browser.close();

            return pageData;
        })();
    }

    public async TryingScrape(): Promise<Object> {
        const browser = await puppeteer.launch({headless: true});

        const page = await browser.newPage();
        await page.goto('https://files.shaps.work');

        const pageData = await page.evaluate(() => {
            const divCount = document.querySelectorAll('div').length;

            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                divs: divCount
            };
        });

        return pageData;
    }
}