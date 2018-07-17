import puppeteer from "puppeteer";

const url = "http://localhost:3000/";
const headless = false;
const slowMo = headless ? 0 : 80;
const timeout = headless ? 5000 : 10000;

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
      headless,
      slowMo
      // args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    // await page.setViewport({ width, height });
  });

  it(
    "Add point",
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
    },
    timeout
  );
  it(
    "Delete point",
    async () => {
      let points = await page.$$(pointSelector);
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
    timeout
  );

  afterAll(() => {
    browser.close();
  });
});
