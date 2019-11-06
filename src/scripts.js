// make table of contents list of links from headings with ids
function makeToc() {
  const headings = document.querySelectorAll('h3[id], h4[id]');
  const toc = document.querySelector('#toc');

  let count = 1;
  for (const heading of headings) {
    const link = document.createElement('a');
    link.innerText = '';
    switch (heading.tagName.toLowerCase()) {
      case 'h3':
        link.dataset.level = '1';
        link.innerText += count + '. ';
        count++;
        break;
      case 'h4':
        link.dataset.level = '2';
        break;
    }
    link.href = '#' + heading.id;
    link.innerText += heading.innerText;
    toc.append(link);
  }
}

// make fixed "jump to table of contents" button
function makeJumpToToc() {
  const toc = document.querySelector('#toc');
  const jump = document.querySelector('#jump_to_toc');

  jump.addEventListener('click', () => {
    if (!toc.getAttribute('open')) toc.setAttribute('open', '');
  });

  window.addEventListener('scroll', () => {
    if (
      window.scrollY >
      toc.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top
    )
      jump.dataset.visible = 'true';
    else jump.dataset.visible = 'false';
  });
}

// make section anchors on headings with ids
function makeAnchors() {
  const headings = document.querySelectorAll('h3[id], h4[id]');
  for (const heading of headings) {
    // create link object
    const link = document.createElement('a');
    link.classList.add('anchor');
    link.innerHTML = '<i class="fas fa-link fa-xs"></i>';
    link.href = '#' + heading.id;
    heading.appendChild(link);
  }
}

// when url hash changes
function onHashChange() {
  const id = window.location.hash.replace('#', '');
  const element = document.getElementById(id);
  if (!element) return;

  // start css glow animation
  element.setAttribute('data-glow', 'true');
  window.setTimeout(() => element.removeAttribute('data-glow'), 2000);
}
window.addEventListener('load', onHashChange);
window.addEventListener('hashchange', onHashChange);

// run scripts when page loaded
window.onload = function() {
  makeToc();
  makeJumpToToc();
  makeAnchors();
};
