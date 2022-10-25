const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const chalk = require('chalk');

const popup = readFileSync(join(__dirname, '..', 'src', 'options.html'));

try {
  writeFileSync(join(__dirname, '..', 'dist', 'options.html'), popup);
  console.log(`${chalk.green('✔')} created options page`);
} catch (err) {
  console.log(err);
  console.log(`${chalk.red('✘')} failed to create options page`);
}
