const fs = require('fs');
fs.readdir('.', (err, data) => {
  if (err) {
    console.log('err', err);
  } else {
    data
      .filter(f => /^.*\.js$/.test(f))
      .forEach(f =>
        fs.readFile(f, { encoding: 'utf-8' }, (err, data) => {
          if (err) {
            console.log('err:>>', err);
          } else {
            console.log('data', data);
          }
        })
      );
  }
});
