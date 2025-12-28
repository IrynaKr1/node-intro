// readdir та readdirSync  для отримання списку файлів поточної папки.
const fs = require('fs');
fs.readdir('.', (err, data) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('readdir data', data);
  }
});

try {
  const files = fs.readdirSync('.', { encoding: 'utf-8' });
  console.log('readdirSync data', files);
} catch (err) {
  console.log('err', err);
}
