'use strict'
const path = require('path')
const fs = require('fs')

while(true) {
    fs.writeFileSync(path.join(__dirname, './background.data'), "some data");
}