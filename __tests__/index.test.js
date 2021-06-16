const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

const settings = {
  viewport: {
    width: 1280,
    height: 1600,
  },
  serverPath: 'http://localhost:8080',
  imageSnapshot: {
    failureThreshold: 0.07,
    failureThresholdType: 'percent',
  }
}

describe('ToDo Table', () => {
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    await page.goto(settings.serverPath);
    await page.setViewport(settings.viewport);
  });

  it('Template with a viewport of 1280px', async () => {
    const template = await page.$('html');

    const image = await template.screenshot();
    expect(image).toMatchImageSnapshot(settings.imageSnapshot);
  });
});
