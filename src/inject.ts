console.log('%c 🪐| stellar theme injected', 'color: #9335f2');

const readmeCode1 = document.querySelectorAll('#readme > div.Box-body.px-5.pb-5 > article > div > pre');
const readmeCode2 = document.querySelectorAll('#readme > div.Box-body.px-5.pb-5 > article > p > code');

// highlight readme code stuff

const addSyntaxHighlightReadMeCode = (els: NodeListOf<Element>) => {
  for (let i = 0; i < els.length; i++) {
    const firstWord = els[i].textContent?.split(' ').shift();
    els[i].innerHTML = `<span class="stellar-injected-readme-code-syntax-highlight">${firstWord}</span>${els[i].textContent?.split('').slice(firstWord?.length).join('')}`;
  }
};

addSyntaxHighlightReadMeCode(readmeCode1);
addSyntaxHighlightReadMeCode(readmeCode2);

const addImgToNavbar = () => {
  const navBar = document.querySelector('body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-md-row.width-full.flex-order-2.flex-md-order-none.mr-0.mt-3.mt-md-0.Details-content--hidden-not-important.d-md-flex');

  const node = document.createElement('div');
  const nodeClass = document.createAttribute('class');
  nodeClass.value = 'stellar-injected-navbar-img-wrapper-class';
  node.setAttributeNode(nodeClass);
  const img = document.createElement('img');
  const imgSrc = document.createAttribute('src');
  const imgClass = document.createAttribute('class');
  imgSrc.value = 'https://64.media.tumblr.com/20f5bc14a8b7c9988b76885b365de179/tumblr_mnsouvSpVD1qjdyzdo2_500.gifv';
  imgClass.value = 'stellar-injected-navbar-img-class';
  img.setAttributeNode(imgSrc);
  img.setAttributeNode(imgClass);
  node.appendChild(img);
  navBar?.appendChild(node);
};

addImgToNavbar();
