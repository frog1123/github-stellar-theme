console.log('%c 🪐| stellar theme injected', 'color: #9335f2');

const readmeCode = document.querySelectorAll('#readme > div.Box-body.px-5.pb-5 > article > div > pre');

// highlight readme code stuff
for (let i = 0; i < readmeCode.length; i++) {
  const firstWord = readmeCode[i].textContent?.split(' ').shift();
  readmeCode[i].innerHTML = `<span class="stellar-injected-readme-code-syntax-highlight">${firstWord}</span>${readmeCode[i].textContent?.split('').slice(firstWord?.length).join('')}`;
}
