const request = require('request');

const fs = require('fs');

const args = process.argv.slice(2)





request(args[0], (error, response, body) => {
  if (!response) {
    console.log('URL Invalid')
    return
  }

  fs.writeFile(args[1], body, () => {
    if (error) throw error;
    const stats = fs.statSync(args[1])
    console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`)
  });
});
