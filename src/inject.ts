console.log('%c 🪐| stellar theme injected', 'color: #9335f2');

const readmeCode = document.querySelectorAll('#readme > div.Box-body.px-5.pb-5 > article > div > pre');

// highlight readme code stuff
for (let i = 0; i < readmeCode.length; i++) {
  const firstWord = readmeCode[i].textContent?.split(' ').shift();
  readmeCode[i].innerHTML = `<span class="stellar-injected-readme-code-syntax-highlight">${firstWord}</span>${readmeCode[i].textContent?.split('').slice(firstWord?.length).join('')}`;
}

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
