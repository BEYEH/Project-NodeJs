# Node.js Tutorial

## Learning Resources
- [Node.js Tutorial - W3Schools](https://www.w3schools.com/nodejs/default.asp)

## Issues
- [writeFile no such file or directory](https://stackoverflow.com/questions/34811222/writefile-no-such-file-or-directory)
  ```
  '/avatar/myFile.png' -> __dirname + '/avatar/myFile.png' 
  ```
- [Code Runner in VSCode is running in output instead of CMD in the Terminal](https://stackoverflow.com/questions/63148583/code-runner-in-vscode-is-running-in-output-instead-of-cmd-in-the-terminal)
  ```
  1. Install the extension Code Runner  in the VSCode.
  2. Go to File -> Preferences -> Settings
  3. search "code-runner:Run In Terminal"
  4. Enable "Whether to run code in Integrated Terminal" option.
  ```
- [package.json "type" field](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_package_json_type_field)
  ```js
  // package.json
  {
    "dependencies": {
      "upper-case": "^3.0.0"
    },

    "type": "module"
  }
  ```
- [Does ES6 import/export need ".js" extension?](https://stackoverflow.com/questions/44481851/does-es6-import-export-need-js-extension)
  ```
  No, modules don't care about extensions. 
  It just needs to be a name that resolves to a source file.

  In your case, http://localhost/bla/src/drawImage is not a file
  while http://localhost/bla/src/drawImage.js is,
  so that's where there error comes from.
  ```

- [__dirname is not defined error in Node 14 version](https://stackoverflow.com/questions/64383909/dirname-is-not-defined-error-in-node-14-version)
  ```js
  import { fileURLToPath } from 'url';
  import { dirname } from 'path';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  ```


## Install package by using NPM.
- $npm install upper-case
- $npm install formidable
- $npm install nodemailer
- $npm install mysql