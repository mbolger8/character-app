import { html, fixture, expect } from '@open-wc/testing';
import "../character-app.js";

describe("CharacterApp test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <character-app
        title="title"
      ></character-app>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
