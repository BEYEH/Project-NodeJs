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


## Install package by using NPM.
- $npm install upper-case