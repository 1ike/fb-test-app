import puppeteer from "puppeteer";

const url = "http://localhost:3000/";

let page;
let browser;

const submitBtnSelector = ".new-point-form__submit-button";
const pointSelector = ".sortable-list__item";
const deleteBtnSelector = ".sortable-list__delete-button";

// const width = 1920;
// const height = 1080;

describe("App browser testing", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80
      // args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    // await page.setViewport({ width, height });
  });

  it(
    "should load without error",
    async () => {
      await page.goto(url);
      await page.keyboard.type("Point 1");
      await page.keyboard.press("Enter");
      await page.keyboard.type("Point 2");
      await page.keyboard.press("Enter");
      await page.keyboard.type("Point 3");
      await page.$eval(submitBtnSelector, el => {
        el.click();
      });

      let points = await page.$$(pointSelector);
      expect(points.length).toEqual(3);

      const secondElemID = await (await points[1].getProperty(
        "id"
      )).jsonValue();

      await points[1].$eval(deleteBtnSelector, el => {
        el.click();
      });
      points = await page.$$(pointSelector);
      expect(points.length).toEqual(2);
      const secondElem = await page.$(`#${secondElemID}`);
      expect(secondElem).toBeFalsy();
      await page.waitFor(3000);
    },
    15000
  );

  afterAll(() => {
    browser.close();
  });
});
