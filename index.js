// readdir та readdirSync  для отримання списку файлів поточної папки.
const fs = require('fs');
fs.readdir('.', (err, data) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('readdir data', data);
    console.log('--------------------');
  }
});

try {
  const files = fs.readdirSync('.', { encoding: 'utf-8' });
  console.log('readdirSync data', files);
  console.log('--------------------');
} catch (err) {
  console.log('err', err);
}

//Використати також версію даного метода на промісах.
const fsPromises = require('fs/promises');

async function readDirectory () {
  try {
    const dirFiles = await fsPromises.readdir('.');
    console.log('Wirh promises dirFiles', dirFiles);
    console.log('--------------------');
  } catch (err) {
    console.log('err', err);
  }
}

readDirectory();
