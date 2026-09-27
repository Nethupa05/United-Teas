const fs = require('fs');
const potrace = require('potrace');
const axios = require('axios');

async function run() {
  const url = "https://static.thenounproject.com/png/3891005-200.png";
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const buffer = Buffer.from(response.data, 'binary');

  potrace.trace(buffer, { color: '#14332A', optTolerance: 0.2 }, function(err, svg) {
    if (err) throw err;
    console.log("SVG OUTPUT:");
    console.log(svg);
    fs.writeFileSync('leaf.svg', svg);
  });
}
run();
