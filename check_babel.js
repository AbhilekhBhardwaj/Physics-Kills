const http = require('http');
http.get('http://localhost:3001/static/js/bundle.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Check if the babel plugin is wrapping JSX with debug wrappers
    // The plugin creates wrapper divs around JSX elements
    const wrapperPattern = /createElement\([^)]*"div"[^)]*data-debug-wrapper/;
    const hasWrapperJsx = wrapperPattern.test(data);
    console.log('Babel plugin wrapping JSX:', hasWrapperJsx);
    
    // Count occurrences of debug-wrapper in the bundle
    const matches = data.match(/data-debug-wrapper/g);
    console.log('Total data-debug-wrapper occurrences:', matches ? matches.length : 0);
    
    // Check for the babel plugin's wrapper function
    const hasWrapperFn = data.includes('__debugWrapper') || data.includes('debugWrapper');
    console.log('Has wrapper function:', hasWrapperFn);
    
    // Search for createElement with debug-wrapper nearby
    let count = 0;
    let idx = 0;
    while ((idx = data.indexOf('data-debug-wrapper', idx + 1)) !== -1) {
      count++;
      if (count <= 3) {
        const context = data.substring(Math.max(0, idx - 200), idx + 50);
        console.log('\n--- Occurrence ' + count + ' ---');
        console.log(context);
      }
    }
    console.log('\nTotal occurrences:', count);
  });
}).on('error', e => console.error(e.message));
