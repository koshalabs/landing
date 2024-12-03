function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

export function disableScroll() {
  const scrollY = window.scrollY;
  const scrollbarWidth = getScrollbarWidth();

  document.getElementById("header").style.paddingRight = `${scrollbarWidth}px`;

  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

export function enableScroll() {
  const scrollY = parseInt(document.body.style.top || '0') * -1;

  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.paddingRight = '';

  document.getElementById("header").style.paddingRight = '';

  window.scrollTo(0, scrollY);
}