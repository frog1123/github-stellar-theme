const { writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const css = ['styles/repo.css', 'styles/profile.css', 'styles/readme.css', 'styles/home.css', 'styles/explore.css', 'styles/issue.css', 'styles/globals.css'];
const js = ['inject.js'];

const createManifest = async ({ js, css }) => {
  try {
    writeFileSync(join(__dirname, '..', 'dist', 'manifest.json'), `{"manifest_version":3,"version":"1.0.0","name":"github stellar theme","author":"frog1123","description":"stellar theme for github","permissions":["contextMenus","activeTab","scripting"],"content_scripts":[{"matches":["https://github.com/*","http://github.com/*"],"js":${JSON.stringify(js)},"css":${JSON.stringify(css)}}],"icons":{"16":"16.png","32":"32.png","48":"48.png","64":"64.png","128":"128.png"}}`);
    console.log(`${chalk.green('✔')} created mainfest.json`);
  } catch (err) {
    console.log(err);
    console.log(`${chalk.red('✘')} failed to create manifest.json`);
  }
};

createManifest({ js, css });

// {
//   "manifest_version": 3,
//   "version": "1.0.0",
//   "name": "github stellar theme",
//   "author": "frog1123",
//   "description": "stellar theme for github",
//   "permissions": ["contextMenus", "activeTab", "scripting"],
//   "content_scripts": [
//     {
//       "matches": ["https://github.com/*", "http://github.com/*"],
//       "js": [],
//       "css": []
//     }
//   ],
//   "icons": {
//     "16": "16.png",
//     "32": "32.png",
//     "48": "48.png",
//     "64": "64.png",
//     "128": "128.png"
//   }
// }
