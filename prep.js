const fs=require('fs');
fs.mkdirSync('www',{recursive:true});
fs.copyFileSync('index.html','www/index.html');
fs.copyFileSync('node_modules/jspdf/dist/jspdf.umd.min.js','www/jspdf.umd.min.js');
console.log('www ready');
