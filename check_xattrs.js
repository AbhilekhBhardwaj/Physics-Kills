const http = require('http');
http.get('http://localhost:3001/static/js/bundle.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const xFileName = (data.match(/x-file-name/g) || []).length;
    const xLineNumber = (data.match(/x-line-number/g) || []).length;
    const xComponent = (data.match(/x-component/g) || []).length;
    const xDynamic = (data.match(/x-dynamic/g) || []).length;
    
    console.log('x-file-name occurrences:', xFileName);
    console.log('x-line-number occurrences:', xLineNumber);
    console.log('x-component occurrences:', xComponent);
    console.log('x-dynamic occurrences:', xDynamic);
    
    if (xFileName > 0) {
      const idx = data.indexOf('x-file-name');
      console.log('\nFirst x-file-name context:');
      console.log(data.substring(Math.max(0,idx-100), idx+150));
    } else {
      console.log('\nBabel metadata plugin is NOT injecting attributes!');
    }
  });
}).on('error', e => console.error(e.message));
