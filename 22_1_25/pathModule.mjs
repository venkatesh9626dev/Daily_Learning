// Path module is to work efficiently with files 

import path from "path";


import { fileURLToPath } from "url"; // to change the url to path

const currentFile = fileURLToPath(import.meta.url);

// Now we can get the file's extension and folder name and those stuffs using path module

console.log(path.dirname(currentFile));
console.log(path.extname(currentFile));


