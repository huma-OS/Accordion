/**
 * @jest-environment jsdom
 */

const {
  initAccordion
} = require('../accordion.js');

beforeEach(() => {
  document.body.innerHTML = `
    <div class="accordion" >
        <div class="title-section">
          HOV
          <span class="expand-icon">+</span>
          <span class="collapse-icon">−</span>
        </div>
        <div class="description">
          <h2>Jay-Z</h2>
          <img src="./img/jay-z.jpg" alt="Jay-Z" class="mc-image" />
          <p class="paragraph">Jay-Z info</p>
        </div>
      </div>
      <div class="accordion">
        <div class="title-section">
          PAC
          <span class="expand-icon">+</span>
          <span class="collapse-icon">−</span>
        </div>
        <div class="description">
          <h2>Tupac Shakur</h2>
          <img src="./img/2pac.jpg" alt="Tupac Shakur" class="mc-image" />
          <p class="paragraph"> 2Pac info</p>
        </div>
      </div>
         <input type="checkbox" id="multiselect"/> 
  `;
});

test('expands the first accordion on init', () => {
  initAccordion();
  const first = document.querySelectorAll('.accordion')[0];
  expect(first.classList.contains('expanded')).toBe(true);
});


test('clicking on a different accordion in single-select collapses others', () => {
  initAccordion();
  const [first, second] = document.querySelectorAll('.accordion');
  const secondTitle = second.querySelector('.title-section');

  secondTitle.click();

  expect(first.classList.contains('expanded')).toBe(false);
  expect(second.classList.contains('expanded')).toBe(true);
});

test('multi-selsect allows both accordions to stay open', () => {
  initAccordion();
  const checkbox = document.getElementById('multiselect');
  checkbox.checked = true;

  const [first, second] = document.querySelectorAll('.accordion');
  const secondTitle = second.querySelector('.title-section');

  secondTitle.click();

  expect(first.classList.contains('expanded')).toBe(true);
  expect(second.classList.contains('expanded')).toBe(true);
});

test('clicking title toggles accordion (close it)', () => {
  initAccordion();
  const title = document.querySelector('.title-section');
  title.click();
  expect(document.querySelector('.accordion').classList.contains('expanded')).toBe(false);
});

test('image and paragraph are visible inside expanded accordion', () => {
  initAccordion();
  const first = document.querySelector('.accordion');

  const img = first.querySelector('img.mc-image');
  const paragraph = first.querySelector('p.paragraph');

  expect(img).not.toBeNull();
  expect(paragraph).not.toBeNull();
  expect(paragraph.textContent).toContain('Jay-Z info');
});
