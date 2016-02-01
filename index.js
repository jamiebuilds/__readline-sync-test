var readline = require('readline-sync');

process.on('SIGSEGV', function() {
  console.log('hi');
});

readline.question('Hit ^C to exit (this will then hang forever)');
