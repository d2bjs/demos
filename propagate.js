/* eslint-disable no-console */
// Propagate dependencies into all demo pacakage.json files.

const recursive = require('recursive-readdir');
const fs = require('fs');

fs.readFile('./package.json', (err, config) => {
  if (err) return console.log(err);
  config = JSON.parse(config);

  recursive(".", (err, files) => {
    files = files.filter(file => !file.includes('node_modules') && file.includes('package.json'));

    files.forEach(file => {
      fs.readFile(file, (err, pkg) => {
        if (err) return console.log(err);
        pkg = JSON.parse(pkg);
        pkg.dependencies = config.dependencies;
        fs.writeFile(file, JSON.stringify(pkg, null, 2), err => {
          if (err) return console.log(err);
        });
      });
    });
  });
});