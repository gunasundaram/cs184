#!/usr/bin/env node
var fs = require('fs');
var outfile = "hellostartup.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);
