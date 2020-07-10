const {getByTestId, toHaveClass} = require('@testing-library/jest-dom');
const {screen} = require('@testing-library/dom');
const {onClickSubmit, onLoad} = require('./script');

test('button has correct class on startup', () => {
  // given a DOM with a button whose id is hello-submit
  const exampleHTML = `
    <div>
      <input id="hello-submit" class="foo">
    </div>
  `
  document.body.innerHTML = exampleHTML;

  // and the onLoad function is called when the page loads
  document.body.onload=onLoad();

  // it
  const buttonEl = document.getElementById("hello-submit");

  // does not replace the existing classes on the button
  expect(buttonEl.classList.contains('foo')).toBe(true);

  // adds the submit-btn style to the button
  expect(buttonEl.classList.contains('submit-btn')).toBe(true);
});
