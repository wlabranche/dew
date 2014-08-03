var fs = require('fs');
var file;
var content;

if (process.argv.length > 2){
  file = process.argv[2];

  if (fs.existsSync(file)){
    content = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(file, content.toUpperCase());
    console.log('Done');
  }else{
    console.log('"' + file + ' does not exist');
  }

}else{
  console.log('ERR: enter a file');
}

