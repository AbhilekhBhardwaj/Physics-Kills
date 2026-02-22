const http = require('http');
http.get('http://localhost:3001/static/js/bundle.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const hasDebugWrapper = data.includes('data-debug-wrapper');
    const hasBebasNeue = data.includes('Bebas Neue');
    const hasTrackingWider = data.includes('tracking-wider');
    const hasTrackingWidest = data.includes('tracking-widest');
    console.log('Bundle size:', (data.length / 1024 / 1024).toFixed(2) + ' MB');
    console.log('Has data-debug-wrapper:', hasDebugWrapper);
    console.log('Has Bebas Neue:', hasBebasNeue);
    console.log('Has tracking-wider:', hasTrackingWider);
    console.log('Has tracking-widest:', hasTrackingWidest);
    
    if (hasDebugWrapper) {
      const idx = data.indexOf('data-debug-wrapper');
      console.log('\nDebug wrapper context:', data.substring(Math.max(0,idx-100), idx+100));
    }
  });
}).on('error', e => console.error(e.message));
