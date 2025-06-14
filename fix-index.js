import fs from 'fs';

const distIndexPath = './dist/index.html';

fs.readFile(distIndexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading dist/index.html:', err);
    process.exit(1);
  }
  const fixed = data.replace(/src="\/src\/app\.js"/g, 'src="./bundle.js"');

  fs.writeFile(distIndexPath, fixed, 'utf8', (err) => {
    if (err) {
      console.error('Error writing dist/index.html:', err);
      process.exit(1);
    }
    console.log('index.html script path fixed successfully.');
  });
});
