/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';//eiher use EJS or CJS, cannot mix
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    {"message": "What is the URL you would like to turn into a QR code?", 
    "name": "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url );//default is png { type: 'png' }
    qr_png.pipe(fs.createWriteStream('qr.png'));

    fs.writeFile("qr_url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      "Prompt couldn't be rendered in the current environment"
    } else {
      "Something went wrong"
    }
  });