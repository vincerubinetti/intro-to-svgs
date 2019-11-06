window.onload = function() {
  const imgs = document.querySelectorAll('a > img');

  for (const img of imgs) {
    const link = img.parentElement;
    if (!link.getAttribute('href'))
      link.href = img.src;
    link.target = '_blank';
  }
};