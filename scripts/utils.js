export const CONFIG = {
  countryCode: 'au',
  language: 'en',
  site: 'oly',
  baseURL: window.location.origin || 'https://oly.com.au/',
};

/**
 * Add classes to elements.
 * @param {String} tag Element tag
 * @param {Array} classes classlist
 */
export function addClassToElement(element, ...classes) {
  classes.forEach((className) => {
    if (className) {
      element.classList.add(className);
    }
  });
}

/**
 * create element with class.
 * @param {String} tag Element tag
 * @param {Array} classes classlist
 */
export function createElementWithClasses(tag, ...classes) {
  const element = document.createElement(tag);
  addClassToElement(element, ...classes);
  return element;
}

/**
 * Creates an element from an HTML string.
 * @param {string} htmlString - The HTML string to create the element from.
 * @return {Element} The created element.
 */
export function createElementFromHTML(htmlString) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString.trim();
  return tempDiv.firstChild;
}