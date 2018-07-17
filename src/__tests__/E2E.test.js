import puppeteer from "puppeteer";

const url = "http://localhost:3000/";
const headless = true;
const slowMo = headless ? 0 : 100;
const timeout = headless ? 7000 : 10000;

let page;
let browser;

const submitBtnSelector = ".new-point-form__submit-button";
const pointSelector = ".sortable-list__item";
const deleteBtnSelector = ".sortable-list__delete-button";

// const width = 1920;
// const height = 1080;

describe("E2E browser testing", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless,
      slowMo,
      args: ["--no-sandbox"]
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
    },
    timeout
  );

  it(
    "Drag-n-Drop point",
    async () => {
      const movedElem = await page.$(pointSelector);
      const movedElemID = await (await movedElem.getProperty("id")).jsonValue();

      const box = await movedElem.boundingBox();

      const mouse = page.mouse;
      await mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await mouse.down();
      await mouse.move(box.x + box.width / 2, box.y + box.height * 1.5, {
        steps: 10
      });
      await mouse.up();
      await page.waitFor(350);

      const firstReoderedPoint = await page.$(pointSelector);
      const firstReoderedPointID = await (await firstReoderedPoint.getProperty(
        "id"
      )).jsonValue();

      expect(movedElemID).not.toEqual(firstReoderedPointID);
    },
    timeout
  );

  afterAll(() => {
    browser.close();
  });
});
