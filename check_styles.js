const http = require('http');
http.get('http://localhost:3001', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const cssLinks = (data.match(/href="[^"]*\.css"/g) || []);
    const jsScripts = (data.match(/src="[^"]*\.js"/g) || []);
    console.log('CSS:', cssLinks);
    console.log('JS:', jsScripts);
    
    // Check for main CSS bundle
    const mainCss = data.match(/href="(\/static\/css\/[^"]+)"/);
    if (mainCss) {
      // Fetch the CSS and check tracking-wider value
      http.get('http://localhost:3001' + mainCss[1], (cssRes) => {
        let css = '';
        cssRes.on('data', chunk => css += chunk);
        cssRes.on('end', () => {
          // Find tracking-wider definition
          const trackingMatch = css.match(/\.tracking-wider\s*\{[^}]*\}/g);
          console.log('\ntracking-wider definitions:', trackingMatch);
          
          // Find font-heading definition
          const fontMatch = css.match(/\.font-heading\s*\{[^}]*\}/g);
          console.log('font-heading definitions:', fontMatch);
          
          // Find any letter-spacing definitions
          const lsMatches = css.match(/letter-spacing:\s*[^;]+/g);
          if (lsMatches) {
            console.log('\nAll letter-spacing values:');
            const unique = [...new Set(lsMatches)];
            unique.forEach(m => console.log('  ', m));
          }
        });
      });
    }
  });
}).on('error', e => console.error(e.message));
